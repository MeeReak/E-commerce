<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'images' => $this->images,
            'sku' => $this->sku,
            'price' => $this->price,
            'quantity' => $this->quantity,
            'discount' => $this->discount,
            'type' => $this->type,
            'color' => $this->color,
            'noted' => $this->noted,
            'good_points' => $this->good_points,
            'description' => $this->description,
            'user_id' => $this->user_id,
            'weight' => $this->weight,
            'images' => $this->images,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
