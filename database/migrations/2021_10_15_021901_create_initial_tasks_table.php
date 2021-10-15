<?php
declare(strict_types = 1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInitialTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->text('slug');
            $table->text('name');
            $table->dateTimeTz('started_at');
            $table->dateTimeTz('ended_at');
            $table->timestamps();
        });
    }
}
