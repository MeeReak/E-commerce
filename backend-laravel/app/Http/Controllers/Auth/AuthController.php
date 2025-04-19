<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuthResource;
use App\Models\Password_reset;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:user_register,email', // Keep user_register table here
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'id' => Str::uuid()->toString(),
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), // Use Hash::make instead of bcrypt
        ]);
        $accessToken = $user->createToken('authToken')->plainTextToken;

        return new AuthResource($user)->additional([
            'access_token' => $accessToken,
        ]);
    }

    public function sendResetLink(Request $request)
    {
        $request->validate(['email' => 'required|email|exists:user_register,email']); // Keep user_register table here

        $user = User::where('email', $request->email)->first();

        if (! $user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $token = Str::random(60);

        Password_reset::create([
            'user_id' => $user->id,
            'reset_token' => $token,
            'expires_at' => Carbon::now()->addHours(1), // Token expires in 1 hour
        ]);

        return response()->json(['message' => 'Reset link sent', 'token' => $token]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'password' => 'required|min:6',
        ]);

        $reset = Password_reset::where('reset_token', $request->token)
            ->where('expires_at', '>', Carbon::now())
            ->where('used', false)
            ->first();

        if (! $reset) {
            return response()->json(['message' => 'Invalid or expired token'], 400);
        }

        $user = User::find($reset->user_id);
        $user->update(['password' => Hash::make($request->password)]);
        $reset->update(['used' => true]);

        return response()->json(['message' => 'Password reset successful']);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $accessToken = $user->createToken('authToken')->plainTextToken;

        return response()->json(['access_token' => $accessToken]);
    }
}
