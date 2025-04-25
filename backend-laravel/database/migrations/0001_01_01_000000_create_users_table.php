<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('gender')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('email')->unique();
            $table->string('address', 255)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone_number')->nullable();
            $table->string('profile')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('billing_address', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('village');
            $table->string('sangkat');
            $table->string('district');
            $table->string('state');
            $table->string('email');
            $table->string('phone_number');
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->id(); // Primary key for sessions table
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('billing_address');
        Schema::dropIfExists('users');
    }
};
