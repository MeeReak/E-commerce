<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BillingAddressResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'village' => $this->village,
            'sangkat' => $this->sangkat,
            'district' => $this->district,
            'state' => $this->state,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
        ];
    }
}
