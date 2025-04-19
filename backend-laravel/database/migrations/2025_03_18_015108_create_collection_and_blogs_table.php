<?php

// database/migrations/xxxx_create_blogs_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('collections', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->json('images');
            $table->date('date');
            $table->string('post_by');
            $table->foreignId('user_id')->constrained('user_register', 'id');
            $table->enum('tag', ['Healthy', 'Fitness', 'Lifestyle', 'Nutrition', 'Mental Health']);
            $table->json('good_points');
            $table->foreignId('collection_id')->constrained('collections', 'id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blogs');
        Schema::dropIfExists('collections');
    }
};
