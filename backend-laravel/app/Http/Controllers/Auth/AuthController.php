<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuthResource;
use App\Models\BillingAddress;
use App\Models\Password_reset;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    // Helper method to return error responses
    private function errorResponse($message, $status = 400, $errors = null)
    {
        $response = ['message' => $message];
        if ($errors) {
            $response['errors'] = $errors;
        }

        return response()->json($response, $status);
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:8|confirmed',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->errorResponse('Validation failed', 422, $e->errors());
        }

        try {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            BillingAddress::create([
                'user_id' => $user->id,
            ]);

            $accessToken = $user->createToken('authToken')->plainTextToken;

            return (new AuthResource($user))->additional([
                'access_token' => $accessToken,
                'token_type' => 'Bearer',
            ]);
        } catch (QueryException $e) {
            return $this->errorResponse('Failed to register user, please try again.', 500);
        } catch (\Exception $e) {
            return $this->errorResponse('An unexpected error occurred.', 500);
        }
    }

    public function sendResetLink(Request $request)
    {
        try {
            $request->validate(['email' => 'required|email|exists:users,email']);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->errorResponse('Validation failed', 422, $e->errors());
        }

        try {
            $user = User::where('email', $request->email)->first();

            if (! $user) {
                return $this->errorResponse('User not found', 404);
            }

            $token = Str::random(60);

            Password_reset::create([
                'user_id' => $user->id,
                'reset_token' => $token,
                'expires_at' => Carbon::now()->addHours(1),
                'used' => false,
            ]);

            // Ideally, send the token via email here instead of returning it

            return response()->json(['message' => 'Reset link sent to your email.']);
        } catch (\Exception $e) {
            return $this->errorResponse('Failed to send reset link, please try again.', 500);
        }
    }

    public function resetPassword(Request $request)
    {
        try {
            $request->validate([
                'token' => 'required|string',
                'password' => 'required|string|min:6|confirmed',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->errorResponse('Validation failed', 422, $e->errors());
        }

        try {
            $reset = Password_reset::where('reset_token', $request->token)
                ->where('expires_at', '>', Carbon::now())
                ->where('used', false)
                ->first();

            if (! $reset) {
                return $this->errorResponse('Invalid or expired token', 400);
            }

            $user = User::find($reset->user_id);
            if (! $user) {
                return $this->errorResponse('User not found', 404);
            }

            $user->update(['password' => Hash::make($request->password)]);
            $reset->update(['used' => true]);

            return response()->json(['message' => 'Password reset successful']);
        } catch (\Exception $e) {
            return $this->errorResponse('Failed to reset password, please try again.', 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->errorResponse('Validation failed', 422, $e->errors());
        }

        try {
            $user = User::where('email', $request->email)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {
                return $this->errorResponse('Incorrect email or password', 401);
            }

            $accessToken = $user->createToken('authToken')->plainTextToken;

            return response()->json(['access_token' => $accessToken]);
        } catch (\Exception $e) {
            return $this->errorResponse('Failed to login, please try again.', 500);
        }
    }
}
