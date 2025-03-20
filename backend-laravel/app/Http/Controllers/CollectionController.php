<?php

// app/Http/Controllers/CollectionController.php

namespace App\Http\Controllers;

use App\Http\Resources\CollectionResource;
use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CollectionController extends Controller
{
    public function index()
    {
        try {
            $collections = Collection::with('blogs')->paginate(10);

            return CollectionResource::collection($collections);
        } catch (\Exception $e) {
            Log::error('Error fetching collections: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch collections: '.$e->getMessage(),
            ], 500);
        }
    }

    public function show(Collection $collection)
    {
        try {
            $collection->load('blogs');

            return new CollectionResource($collection);
        } catch (\Exception $e) {
            Log::error('Error fetching collection: '.$e->getMessage(), [
                'collection_id' => $collection->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch collection: '.$e->getMessage(),
            ], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
            ]);

            Log::info('Creating collection with validated data:', $validated);

            $collection = Collection::create($validated);

            if (! $collection->exists) {
                throw new \Exception('Collection was not saved to the database.');
            }

            return (new CollectionResource($collection))
                ->response()
                ->setStatusCode(201);
        } catch (\Exception $e) {
            Log::error('Error creating collection: '.$e->getMessage(), [
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to create collection: '.$e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, Collection $collection)
    {
        try {
            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
            ]);

            Log::info('Updating collection with validated data:', [
                'collection_id' => $collection->id,
                'data' => $validated,
            ]);

            $updated = $collection->update($validated);

            if (! $updated) {
                throw new \Exception('Collection update failed.');
            }

            $collection->load('blogs');

            return new CollectionResource($collection);
        } catch (\Exception $e) {
            Log::error('Error updating collection: '.$e->getMessage(), [
                'collection_id' => $collection->id,
                'request' => $request->all(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to update collection: '.$e->getMessage(),
            ], 500);
        }
    }

    public function destroy(Collection $collection)
    {
        try {
            Log::info('Deleting collection:', ['collection_id' => $collection->id]);

            $collection->delete();

            return response()->json([
                'success' => true,
                'message' => 'Collection deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting collection: '.$e->getMessage(), [
                'collection_id' => $collection->id,
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to delete collection: '.$e->getMessage(),
            ], 500);
        }
    }
}
