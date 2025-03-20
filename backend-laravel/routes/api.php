<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/health', function () {
    return response()->json(['message' => 'API is healthy']);
});

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('forgot-password', [AuthController::class, 'sendResetLink']);
    Route::post('reset-password', [AuthController::class, 'resetPassword']);
    Route::post('login', [AuthController::class, 'login']);
});
Route::prefix('v1')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('blogs', BlogController::class);
    Route::apiResource('collections', CollectionController::class);
    Route::apiResource('orders', OrderController::class);
    Route::post('/orders/{order}/items', [OrderController::class, 'addItem'])->name('orders.items.store');
    Route::delete('/orders/{order}/items/{itemId}', [OrderController::class, 'removeItem'])->name('orders.items.destroy');
});
