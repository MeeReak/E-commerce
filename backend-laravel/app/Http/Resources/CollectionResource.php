<?php

// app/Http/Resources/CollectionResource.php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'blogs' => BlogResource::collection($this->whenLoaded('blogs')),
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
