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
            // dont get the uesr with the same id as the logged in user
            $userId = auth()->user()->id;
            $orders = Order::with(['items.product', 'user'])->where('user_id', '!=', $userId)->paginate(10);

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
    public function show($id)
    {
        try {
            if ($id == 'me') {
                $order = Order::where('user_id', auth()->id())->get();
                // send the last order
                $order = $order->last();

                return new OrderResource($order);
            } else {
                $order = Order::with(['items.product'])->findOrFail($id);

                return new OrderResource($order);
            }
        } catch (\Exception $e) {
            dd($e);
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

            $order = Order::create([
                'user_id' => auth()->id(),
                'total' => 0,
                'status' => 'pending',
                'payment_status' => 'unpaid',
            ]);

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
                'payment_status' => 'sometimes|in:paid,unpaid,refund',
                'payment_method' => 'sometimes|string|max:255',
            ]);
            $validated['updated_at'] = now();

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
                // 'price' => 'required|numeric|min:0',
            ]);
            $validated['updated_at'] = now();

            // validate quantity
            $product = \DB::table('products')->where('id', $validated['product_id'])->first();
            if ($product->quantity < $validated['quantity']) {
                return response()->json([
                    'success' => false,
                    'message' => 'Not enough quantity available',
                ], 400);
            }

            // calculate price
            $price = \DB::table('products')->where('id', $validated['product_id'])->value('price');
            $validated['price'] = $price;

            // update product quantity
            $product->quantity -= $validated['quantity'];
            \DB::table('products')->where('id', $validated['product_id'])->update(['quantity' => $product->quantity]);

            $item = $order->items()->where('product_id', $validated['product_id'])->first();

            if ($item) {
                $item->quantity += $validated['quantity'];
                $item->save();
            } else {
                $order->items()->create($validated);
            }

            // Recalculate order total
            $total = $order->items()->sum(\DB::raw('quantity * price'));
            $order->update(['total' => $total]);

            $order->load('items.product');

            return new OrderResource($order);
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
            $item = $order->items()->findOrFail($itemId);
            $item->delete();

            // Recalculate order total
            $total = $order->items()->sum(\DB::raw('quantity * price'));
            $order->update(['total' => $total]);
            $validated['updated_at'] = now();

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

    // get the total money spent in the website
    public function totalSpent()
    {
        try {
            // get all total spent
            // //dont caculate the order that user who is logged in
            $userId = auth()->user()->id;
            $total = Order::where('user_id', '!=', $userId)->sum('total');
            // $total = Order::all()->sum('total');

            return response()->json([
                'success' => true,
                'total' => $total,
            ]);
        } catch (\Exception $e) {
            Log::error('Error calculating total spent: '.$e->getMessage(), [
                'user_id' => auth()->id(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to calculate total spent: '.$e->getMessage(),
            ], 500);
        }
    }

    public function spent($id)
    {
        try {
            // get total of user
            $total = Order::where('user_id', $id)->sum('total');

            return response()->json([
                'success' => true,
                'total' => $total,
            ]);
        } catch (\Exception $e) {
            Log::error('Error calculating total spent: '.$e->getMessage(), [
                'user_id' => auth()->id(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to calculate total spent: '.$e->getMessage(),
            ], 500);
        }
    }

    public function orderCount($id)
    {
        try {
            // Get the count of orders for the user
            $orderCount = Order::where('user_id', $id)->count();

            return response()->json([
                'success' => true,
                'total' => $orderCount,
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching order count: '.$e->getMessage(), [
                'user_id' => $id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch order count: '.$e->getMessage(),
            ], 500);
        }
    }
}
