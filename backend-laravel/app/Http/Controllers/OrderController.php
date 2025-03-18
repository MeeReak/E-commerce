<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Display a listing of the orders.
     */
    public function index()
    {
        try {
            $orders = Order::with('items.product')->paginate(10);

            return OrderResource::collection($orders);
        } catch (\Exception $e) {
            Log::error('Error fetching orders: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch orders: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified order.
     */
    public function show(Order $order)
    {
        try {
            $order->load('items.product');

            return new OrderResource($order);
        } catch (\Exception $e) {
            Log::error('Error fetching order: '.$e->getMessage(), [
                'order_id' => $order->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch order: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created order in storage.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'total' => 'required|numeric|min:0',
                'items' => 'required|array',
                'items.*.product_id' => 'required|exists:products,id',
                'items.*.quantity' => 'required|integer|min:1',
                'items.*.price' => 'required|numeric|min:0',
            ]);

            Log::info('Creating order with validated data:', $validated);

            $order = Order::create([
                'total' => $validated['total'],
                'status' => 'pending',
            ]);

            foreach ($validated['items'] as $item) {
                $order->items()->create([
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }

            if (! $order->exists) {
                throw new \Exception('Order was not saved to the database.');
            }

            $order->load('items.product');

            return (new OrderResource($order))
                ->response()
                ->setStatusCode(201);
        } catch (\Exception $e) {
            Log::error('Error creating order: '.$e->getMessage(), [
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to create order: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update the specified order in storage.
     */
    public function update(Request $request, Order $order)
    {
        try {
            $validated = $request->validate([
                'status' => 'sometimes|in:pending,processing,shipped,delivered,cancelled',
            ]);

            Log::info('Updating order with validated data:', [
                'order_id' => $order->id,
                'data' => $validated,
            ]);

            $updated = $order->update($validated);

            if (! $updated) {
                throw new \Exception('Order update failed.');
            }

            $order->load('items.product');

            return new OrderResource($order);
        } catch (\Exception $e) {
            Log::error('Error updating order: '.$e->getMessage(), [
                'order_id' => $order->id,
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to update order: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove the specified order from storage.
     */
    public function destroy(Order $order)
    {
        try {
            Log::info('Deleting order:', ['order_id' => $order->id]);

            $order->delete();

            return response()->json([
                'success' => true,
                'message' => 'Order deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting order: '.$e->getMessage(), [
                'order_id' => $order->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to delete order: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Add an item to an existing order.
     */
    public function addItem(Request $request, Order $order)
    {
        try {
            $validated = $request->validate([
                'product_id' => 'required|exists:products,id',
                'quantity' => 'required|integer|min:1',
                'price' => 'required|numeric|min:0',
            ]);

            Log::info('Adding item to order:', [
                'order_id' => $order->id,
                'data' => $validated,
            ]);

            $item = $order->items()->create([
                'product_id' => $validated['product_id'],
                'quantity' => $validated['quantity'],
                'price' => $validated['price'],
            ]);

            // Recalculate and update the order total
            $order->total = $order->items()->sum(\DB::raw('quantity * price'));
            $order->save();

            $order->load('items.product');

            return (new OrderResource($order))
                ->response()
                ->setStatusCode(201);
        } catch (\Exception $e) {
            Log::error('Error adding item to order: '.$e->getMessage(), [
                'order_id' => $order->id,
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to add item to order: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove an item from an existing order.
     */
    public function removeItem(Order $order, $itemId)
    {
        try {
            $item = $order->items()->where('id', $itemId)->firstOrFail();

            Log::info('Removing item from order:', [
                'order_id' => $order->id,
                'item_id' => $itemId,
            ]);

            $item->delete();

            // Recalculate and update the order total
            $order->total = $order->items()->sum(\DB::raw('quantity * price'));
            $order->save();

            $order->load('items.product');

            return new OrderResource($order);
        } catch (\Exception $e) {
            Log::error('Error removing item from order: '.$e->getMessage(), [
                'order_id' => $order->id,
                'item_id' => $itemId,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to remove item from order: '.$e->getMessage(),
            ], $e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException ? 404 : 500);
        }
    }
}
