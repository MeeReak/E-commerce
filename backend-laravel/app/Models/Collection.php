<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Collection extends Model
{
    protected $table = 'collections';

    protected $fillable = ['name'];

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

    public function blogs(): HasMany
    {
        return $this->hasMany(Blog::class, 'collection_id');
    }
}
