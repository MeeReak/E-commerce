<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Product extends Model
{
    public $incrementing = false; // UUIDs are not auto-incrementing

    protected $keyType = 'string'; // Primary key is a string (UUID)

    protected $fillable = [
        'name', 'images', 'sku', 'price', 'quantity', 'discount', 'type',
        'color', 'noted', 'goodpoints', 'description', 'weight', 'category_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = Str::uuid()->toString();
            }
        });
    }

    protected $casts = [
        'images' => 'array',
        'goodpoints' => 'array',
        'type' => 'string',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
