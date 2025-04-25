<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Blog extends Model
{
    protected $table = 'blogs';

    protected $fillable = [
        'name',
        'images',
        'collection_id',
        'user_id',
        'description',
    ];

    protected $casts = [
        'images' => 'array',      // Cast JSON to array
        'description' => 'array', // Cast JSON to array
    ];

    public function collection(): BelongsTo
    {
        return $this->belongsTo(Collection::class, 'collection_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
