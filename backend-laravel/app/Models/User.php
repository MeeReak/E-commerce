<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'name',
        'gender',
        'date_of_birth',
        'email',
        'address',
        'phone_number',
        'password',
        'email_verified_at',
        'profile',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'date',
    ];

    // Add this method to inform Sanctum of the tokenable ID type
    public function getKeyType()
    {
        return 'string'; // Ensure Sanctum knows the key is a string
    }

    public function billing_address()
    {
        return $this->hasOne(BillingAddress::class, 'user_id');
    }
}
