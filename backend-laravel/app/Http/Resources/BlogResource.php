<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    public function toArray($request)
    {
        //

        return [
            'id' => $this->id,
            'name' => $this->name,
            'images' => $this->images,
            'user_id' => $this->user_id,
            'description' => $this->description,
            'collection' => new CollectionResource($this->whenLoaded('collection')),
            'user' => new UserResource($this->whenLoaded('user')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'views' => rand(100, 5000),
        ];
    }
}
