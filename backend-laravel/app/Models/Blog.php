<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Blog extends Model
{
    protected $table = 'blogs';

    protected $fillable = [
        'name', 'images', 'date', 'post_by', 'tag', 'good_points', 'collection_id', 'user_id',
    ];

    protected $casts = [
        'images' => 'array',      // Cast JSON to array
        'good_points' => 'array',  // Cast JSON to array
        'date' => 'date',         // Cast date to Carbon instance
        'tag' => 'string',        // Ensure enum is cast as string
    ];

    public function collection(): BelongsTo
    {
        return $this->belongsTo(Collection::class, 'collection_id');
    }
}
