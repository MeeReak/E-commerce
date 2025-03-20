<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'images' => $this->images,
            'date' => $this->date->toDateString(),
            'post_by' => $this->post_by,
            'tag' => $this->tag,
            'goodpoints' => $this->goodpoints,
            'collection' => new CollectionResource($this->whenLoaded('collection')),
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
