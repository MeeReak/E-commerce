<?php

// use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\BillingAddressController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/health', function () {
    return response()->json(['message' => 'API is healthy']);
});

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('forgot-password', [AuthController::class, 'sendResetLink']);
    Route::post('reset-password', [AuthController::class, 'resetPassword']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('v1')->group(function () {
        Route::apiResource('products', ProductController::class);
        Route::apiResource('categories', CategoryController::class);
        Route::apiResource('blogs', BlogController::class);
        Route::apiResource('collections', CollectionController::class);
        Route::apiResource('orders', OrderController::class);
        Route::apiResource('users', UserController::class);
        Route::apiResource('billing_address', BillingAddressController::class);
        Route::post('/orders/{order}/items', [OrderController::class, 'addItem'])->name('orders.items.store');
        Route::delete('/orders/{order}/items/{itemId}', [OrderController::class, 'removeItem'])->name('orders.items.destroy');
        Route::get('/total-spent', [OrderController::class, 'totalSpent'])->name('orders.total_spent');
        Route::get('/spent/{id}', [OrderController::class, 'spent'])->name('orders.spent');
        Route::get('/total-order/{id}', [OrderController::class, 'orderCount'])->name('orders.order_count');
    });
});
