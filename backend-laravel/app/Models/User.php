<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str; // Add this
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable; // Add HasApiTokens here

    protected $table = 'user_register';

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = [
        'id',
        'first_name',
        'last_name',
        'name',
        'gender',
        'date_of_birth',
        'email',
        'phone',
        'address',
        'password',
        'email_verified_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'date',
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

    // Add this method to inform Sanctum of the tokenable ID type
    public function getKeyType()
    {
        return 'string'; // Ensure Sanctum knows the key is a string
    }
}
