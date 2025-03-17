<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    /**
     * Display a listing of products.
     */
    public function index()
    {
        try {
            $products = Product::with('category')->paginate(10);

            return ProductResource::collection($products);
        } catch (\Exception $e) {
            Log::error('Error fetching products: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch products: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display a specific product.
     */
    public function show(Product $product)
    {
        try {
            $product->load('category');

            return new ProductResource($product);
        } catch (\Exception $e) {
            Log::error('Error fetching product: '.$e->getMessage(), [
                'product_id' => $product->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch product: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created product.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'images' => 'required|array',
                'images.*' => 'string',
                'sku' => 'required|string|unique:products,sku',
                'price' => 'required|numeric|min:0',
                'quantity' => 'required|integer|min:0',
                'discount' => 'nullable|numeric|min:0|max:100',
                'type' => 'required|in:perishable,non-perishable',
                'color' => 'required|string|max:255',
                'noted' => 'nullable|string',
                'goodpoints' => 'required|array',
                'goodpoints.*' => 'string',
                'description' => 'required|string',
                'weight' => 'required|numeric|min:0',
                'category_id' => 'required|exists:categories,id',
            ]);

            Log::info('Creating product with validated data:', $validated);

            $product = Product::create($validated);

            if (! $product->exists) {
                throw new \Exception('Product was not saved to the database.');
            }

            $product->load('category');

            return (new ProductResource($product))
                ->response()
                ->setStatusCode(201);
        } catch (\Exception $e) {
            Log::error('Error creating product: '.$e->getMessage(), [
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to create product: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update an existing product.
     */
    public function update(Request $request, Product $product)
    {
        try {
            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
                'images' => 'sometimes|array',
                'images.*' => 'string',
                'sku' => 'sometimes|string|unique:products,sku,'.$product->id,
                'price' => 'sometimes|numeric|min:0',
                'quantity' => 'sometimes|integer|min:0',
                'discount' => 'sometimes|numeric|min:0|max:100',
                'type' => 'sometimes|in:perishable,non-perishable',
                'color' => 'sometimes|string|max:255',
                'noted' => 'sometimes|nullable|string',
                'goodpoints' => 'sometimes|array',
                'goodpoints.*' => 'string',
                'description' => 'sometimes|string',
                'weight' => 'sometimes|numeric|min:0',
                'category_id' => 'sometimes|exists:categories,id',
            ]);

            Log::info('Updating product with validated data:', [
                'product_id' => $product->id,
                'data' => $validated,
            ]);

            $updated = $product->update($validated);

            if (! $updated) {
                throw new \Exception('Product update failed.');
            }

            $product->load('category');

            return new ProductResource($product);
        } catch (\Exception $e) {
            Log::error('Error updating product: '.$e->getMessage(), [
                'product_id' => $product->id,
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to update product: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Remove a product.
     */
    public function destroy(Product $product)
    {
        try {
            Log::info('Deleting product:', ['product_id' => $product->id]);

            $product->delete();

            return response()->json([
                'success' => true,
                'message' => 'Product deleted successfully',
            ], 200); // Changed from 204 to 200 for consistency with JSON response
        } catch (\Exception $e) {
            Log::error('Error deleting product: '.$e->getMessage(), [
                'product_id' => $product->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to delete product: '.$e->getMessage(),
            ], 500);
        }
    }
}
