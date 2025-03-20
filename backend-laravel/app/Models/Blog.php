<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Blog extends Model
{
    protected $table = 'blogs';

    protected $fillable = [
        'name', 'images', 'date', 'post_by', 'tag', 'goodpoints', 'collection_id',
    ];

    protected $casts = [
        'images' => 'array',      // Cast JSON to array
        'goodpoints' => 'array',  // Cast JSON to array
        'date' => 'date',         // Cast date to Carbon instance
        'tag' => 'string',        // Ensure enum is cast as string
    ];

    public $incrementing = false; // Since we're using UUIDs

    protected $keyType = 'string'; // UUIDs are strings

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }

    public function collection(): BelongsTo
    {
        return $this->belongsTo(Collection::class, 'collection_id');
    }
}
