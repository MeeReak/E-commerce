<?php

// database/migrations/xxxx_create_blogs_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->json('images');
            $table->date('date');
            $table->string('post_by');
            $table->uuid('user_id');
            $table->foreign('user_id')->references('id')->on('user_register')->onDelete('cascade');
            $table->enum('tag', ['Healthy', 'Fitness', 'Lifestyle', 'Nutrition', 'Mental Health']);
            $table->json('goodpoints');
            $table->uuid('collection_id');
            $table->foreign('collection_id')->references('id')->on('collections')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
