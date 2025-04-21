<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function index()
    {
        try {
            $blogs = Blog::with('collection')->paginate(10);

            return BlogResource::collection($blogs);
        } catch (\Exception $e) {
            return $this->handleException('fetching blogs', $e);
        }
    }

    public function show(Blog $blog)
    {
        try {
            $blog->load('collection');

            return new BlogResource($blog);
        } catch (\Exception $e) {
            return $this->handleException('fetching blog', $e, ['blog_id' => $blog->id]);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $this->validateBlog($request);

            $validated['images'] = $this->uploadImages($request);
            $validated['user_id'] = auth()->id();

            Log::info('Creating blog', $validated);

            $blog = Blog::create($validated);

            if (! $blog->exists) {
                throw new \Exception('Blog was not saved to the database.');
            }

            $blog->load('collection');

            return (new BlogResource($blog))->response()->setStatusCode(201);
        } catch (\Exception $e) {
            return $this->handleException('creating blog', $e);
        }
    }

    public function update(Request $request, Blog $blog)
    {
        try {
            $validated = $this->validateBlog($request, $blog);

            $this->deleteImages($blog->images ?? []);
            $validated['images'] = $this->uploadImages($request);

            Log::info('Updating blog', [
                'blog_id' => $blog->id,
                'data' => $validated,
            ]);

            if (! $blog->update($validated)) {
                throw new \Exception('Blog update failed.');
            }

            $blog->load('collection');

            return new BlogResource($blog);
        } catch (\Exception $e) {
            return $this->handleException('updating blog', $e, ['blog_id' => $blog->id]);
        }
    }

    public function destroy(Blog $blog)
    {
        try {
            $this->deleteImages($blog->images);
            $blog->delete();

            Log::info('Deleted blog', ['blog_id' => $blog->id]);

            return response()->json([
                'success' => true,
                'message' => 'Blog deleted successfully',
            ]);
        } catch (\Exception $e) {
            return $this->handleException('deleting blog', $e, ['blog_id' => $blog->id]);
        }
    }

    private function validateBlog(Request $request, ?Blog $blog = null): array
    {
        return $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'images' => $blog ? 'sometimes|array' : 'required|array',
            'images.*' => 'file|image|max:5120',
            'description' => 'sometimes|required|array',
            'description.*' => 'string',
            'collection_id' => 'sometimes|required|exists:collections,id',
        ]);
    }

    private function uploadImages(Request $request): array
    {
        $imagePaths = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('blogs', 's3');
                $imagePaths[] = Storage::disk('s3')->url($path);
            }
        } else {
            Log::warning('No image files found in blog request.');
        }

        return $imagePaths;
    }

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
