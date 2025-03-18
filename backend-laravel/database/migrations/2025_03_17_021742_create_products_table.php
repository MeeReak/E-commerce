<?php

// database/migrations/2025_03_17_021742_create_products_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->json('images');
            $table->string('sku')->unique();
            $table->decimal('price', 8, 2);
            $table->integer('quantity');
            $table->decimal('discount', 5, 2)->nullable();
            $table->enum('type', ['perishable', 'non-perishable']);
            $table->string('color');
            $table->string('noted')->nullable();
            $table->json('goodpoints');
            $table->text('description');
            $table->decimal('weight', 8, 2);
            $table->uuid('category_id'); // Changed to uuid
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
