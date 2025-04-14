<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'name', 'images', 'sku', 'price', 'quantity', 'discount', 'type',
        'color', 'noted', 'good_points', 'description', 'weight', 'category_id', 'user_id',
    ];

    protected $casts = [
        'images' => 'array',
        'good_points' => 'array',
        'type' => 'string',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
