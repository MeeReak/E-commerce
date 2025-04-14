<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Collection extends Model
{
    protected $table = 'collections';

    protected $fillable = ['name'];

    public function blogs(): HasMany
    {
        return $this->hasMany(Blog::class, 'collection_id');
    }
}
