<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller
{
    public function index()
    {
        try {
            $blogs = Blog::with('collection')->paginate(10);

            return BlogResource::collection($blogs);
        } catch (\Exception $e) {
            Log::error('Error fetching blogs: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch blogs: '.$e->getMessage(),
            ], 500);
        }
    }

    public function show(Blog $blog)
    {
        try {
            $blog->load('collection');

            return new BlogResource($blog);
        } catch (\Exception $e) {
            Log::error('Error fetching blog: '.$e->getMessage(), [
                'blog_id' => $blog->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch blog: '.$e->getMessage(),
            ], 500);
        }
    }

    public function store(Request $request)
    {
        try {

            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'images' => 'required|array',
                'images.*' => 'string',
                'date' => 'required|date',
                'post_by' => 'required|string|max:255',
                'tag' => 'required|in:Healthy,Fitness,Lifestyle,Nutrition,Mental Health',
                'goodpoints' => 'required|array',
                'goodpoints.*' => 'string',
                'collection_id' => 'required|uuid|exists:collections,id',
            ]);

            Log::info('Creating blog with validated data:', $validated);

            $validated['user_id'] = auth()->id();

            $blog = Blog::create($validated);

            if (! $blog->exists) {
                throw new \Exception('Blog was not saved to the database.');
            }

            $blog->load('collection');

            return (new BlogResource($blog))
                ->response()
                ->setStatusCode(201);
        } catch (\Exception $e) {
            Log::error('Error creating blog: '.$e->getMessage(), [
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to create blog: '.$e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, Blog $blog)
    {
        try {
            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
                'images' => 'sometimes|array',
                'images.*' => 'string',
                'date' => 'sometimes|date',
                'post_by' => 'sometimes|string|max:255',
                'tag' => 'sometimes|in:Healthy,Fitness,Lifestyle,Nutrition,Mental Health',
                'goodpoints' => 'sometimes|array',
                'goodpoints.*' => 'string',
                'collection_id' => 'sometimes|uuid|exists:collections,id',
            ]);

            Log::info('Updating blog with validated data:', [
                'blog_id' => $blog->id,
                'data' => $validated,
            ]);

            $updated = $blog->update($validated);

            if (! $updated) {
                throw new \Exception('Blog update failed.');
            }

            $blog->load('collection');

            return new BlogResource($blog);
        } catch (\Exception $e) {
            Log::error('Error updating blog: '.$e->getMessage(), [
                'blog_id' => $blog->id,
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to update blog: '.$e->getMessage(),
            ], 500);
        }
    }

    public function destroy(Blog $blog)
    {
        try {
            Log::info('Deleting blog:', ['blog_id' => $blog->id]);

            $blog->delete();

            return response()->json([
                'success' => true,
                'message' => 'Blog deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting blog: '.$e->getMessage(), [
                'blog_id' => $blog->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to delete blog: '.$e->getMessage(),
            ], 500);
        }
    }
}
