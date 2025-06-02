<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with('products')->paginate(10);

        return CategoryResource::collection($categories);
    }

    public function show(Category $category)
    {
        $category->load('products');

        return new CategoryResource($category);
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
            ]);

            $validated['image'] = $this->uploadImage($request);
            $validated['user_id'] = auth()->id();

            $category = Category::create($validated);

            return new CategoryResource($category);
        } catch (\Exception $e) {
            Log::error('Error creating product: '.$e->getMessage(), [
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to create category: '.$e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $this->deleteImage($category->image);
        $validated['images'] = $this->uploadImage($request);

        $category->update($validated);
        $category->load('products'); // Reload related products

        return new CategoryResource($category);
    }

    public function destroy(Category $category)
    {
        $this->deleteImage($category->image);

        $category->delete();

        return response()->noContent();
    }

    private function uploadImage(Request $request): ?string
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('categories', 's3');

            return Storage::disk('s3')->url($path);
        }

        Log::warning('No image file found in request.');

        return null;
    }

    private function deleteImage(?string $url): void
    {
        if ($url) {
            $path = ltrim(parse_url($url, PHP_URL_PATH), '/');
            if (Storage::disk('s3')->exists($path)) {
                Storage::disk('s3')->delete($path);
            }
        }
    }
}
