<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMoreFieldsToTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Task Categories are things like "routing", "small_movement", or "enigma"
        Schema::create('task_categories', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('description');
        });

        Schema::table('tasks', function (Blueprint $table) {
            $table->text('image')->after('name');
            $table->text('description')->after('name');
            $table->unsignedBigInteger('task_category_id')->nullable(); // Tasks SHOULD be in a category, but not all of them are.

            $table->foreign('task_category_id')->references('id')->on('task_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            //
        });
    }
}
