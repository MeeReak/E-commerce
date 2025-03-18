<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Password_reset extends Model
{
    protected $table = 'password_reset';

    protected $fillable = ['user_id', 'reset_token', 'expires_at', 'used'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
