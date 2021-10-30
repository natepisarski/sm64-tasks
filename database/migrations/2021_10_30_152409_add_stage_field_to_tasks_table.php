<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStageFieldToTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stages', function (Blueprint $table) {
            $table->id();
            $table->text('slug');
            $table->text('name');
        });

        Schema::table('tasks', function (Blueprint $table) {
            $table->unsignedBigInteger('stage_id')->nullable()->after('description');
            $table->foreign('stage_id')->references('id')->on('stages');
        });
    }
}
