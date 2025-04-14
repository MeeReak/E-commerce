<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('password_reset', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('user_register', 'id');
            $table->string('reset_token')->unique();
            $table->timestamp('expires_at');
            $table->timestamps();
            $table->boolean('used')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
