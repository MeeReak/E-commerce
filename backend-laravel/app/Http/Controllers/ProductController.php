<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = Product::with('category')->paginate(10);

            return ProductResource::collection($products);
        } catch (\Exception $e) {
            return $this->handleException('fetching products', $e);
        }
    }

    public function show(Product $product)
    {
        try {
            $product->load('category');

            return new ProductResource($product);
        } catch (\Exception $e) {
            return $this->handleException('fetching product', $e, ['product_id' => $product->id]);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $this->validateProduct($request);

            $validated['images'] = $this->uploadImages($request);
            $validated['user_id'] = auth()->id();

            Log::info('Creating product', $validated);

            $product = Product::create($validated);

            if (! $product->exists) {
                throw new \Exception('Product was not saved to the database.');
            }

            $product->load('category');

            return (new ProductResource($product))->response()->setStatusCode(201);
        } catch (\Exception $e) {
            return $this->handleException('creating product', $e);
        }
    }

    public function update(Request $request, Product $product)
    {
        try {
            $validated = $this->validateProduct($request, $product);

            // Get images to retain
            $existingImages = $request->input('existing_images', []);

            // Determine which images to delete
            $imagesToDelete = array_diff($product->images ?? [], $existingImages);
            $this->deleteImages($imagesToDelete);

            // Upload new images
            $uploadedImages = $this->uploadImages($request);

            // Merge existing + new
            $validated['images'] = array_merge($existingImages, $uploadedImages);
            $validated['updated_at'] = now();

            Log::info('Updating product', [
                'product_id' => $product->id,
                'data' => $validated,
            ]);

            if (! $product->update($validated)) {
                throw new \Exception('Product update failed.');
            }

            $product->load('category');

            return new ProductResource($product);
        } catch (\Exception $e) {
            return $this->handleException('updating product', $e, ['product_id' => $product->id]);
        }
    }

    public function destroy(Product $product)
    {
        try {
            $this->deleteImages($product->images);
            $product->delete();

            Log::info('Deleted product', ['product_id' => $product->id]);

            return response()->json([
                'success' => true,
                'message' => 'Product deleted successfully',
            ]);
        } catch (\Exception $e) {
            return $this->handleException('deleting product', $e, ['product_id' => $product->id]);
        }
    }

    /**
     * Validate incoming request for storing/updating product.
     */
    private function validateProduct(Request $request, ?Product $product = null): array
    {
        $rules = [
            'name' => 'sometimes|required|string|max:255',
            'sku' => ['sometimes', 'required', 'string', 'unique:products,sku'.($product ? ','.$product->id : '')],
            'price' => 'sometimes|required|numeric|min:0',
            'quantity' => 'sometimes|required|integer|min:0',
            'discount' => 'nullable|numeric|min:0|max:100',
            'type' => 'sometimes|required|in:perishable,non-perishable',
            'color' => 'sometimes|required|string|max:255',
            'noted' => 'nullable|string',
            'description' => 'sometimes|required|string',
            'weight' => 'sometimes|required|numeric|min:0',
            'category_id' => 'sometimes|required|exists:categories,id',
            'images' => $product ? 'sometimes|array' : 'required|array',
            'images.*' => 'file|image|max:5120',
            'existing_images' => 'sometimes|array',
            'existing_images.*' => 'string|url',
            'good_points' => 'sometimes|required|array',
            'good_points.*' => 'string',
        ];

        return $request->validate($rules);
    }

    /**
     * Upload images to S3 and return their URLs.
     */
    private function uploadImages(Request $request): array
    {
        $imagePaths = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products', 's3');
                $imagePaths[] = Storage::disk('s3')->url($path);
            }
        } else {
            Log::warning('No image files found in request.');
        }

        return $imagePaths;
    }

    /**
     * Delete images from S3.
     */
    private function deleteImages(?array $images): void
    {
        if (is_array($images)) {
            foreach ($images as $url) {
                $path = ltrim(parse_url($url, PHP_URL_PATH), '/');
                if (Storage::disk('s3')->exists($path)) {
                    Storage::disk('s3')->delete($path);
                }
            }
        }
    }

    /**
     * Centralized error handling and logging.
     */
    private function handleException(string $action, \Exception $e, array $context = [])
    {
        Log::error("Error {$action}: ".$e->getMessage(), array_merge($context, [
            'trace' => $e->getTraceAsString(),
        ]));

        return response()->json([
            'success' => false,
            'message' => "Failed to {$action}: ".$e->getMessage(),
        ], 500);
    }
}
