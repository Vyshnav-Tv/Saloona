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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('customer_id')
                ->constrained('users')
                ->restrictOnDelete();

            $table->foreignId('staff_profile_id')
                ->constrained()
                ->restrictOnDelete();

            $table->foreignId('service_id')
                ->constrained()
                ->restrictOnDelete();

            $table->dateTime('start_at');

            $table->dateTime('end_at');

            // pending, confirmed, cancelled, completed
            $table->string('status')->default('pending');

            // Snapshot of price and duration at booking time
            $table->decimal('service_price', 10, 2);

            $table->unsignedSmallInteger('service_duration_minutes');

            $table->text('notes')->nullable();

            $table->timestamps();

            $table->index(['staff_profile_id', 'start_at', 'end_at']);

            $table->index(['customer_id', 'start_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
