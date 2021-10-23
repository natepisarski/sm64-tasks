<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPlayerTaskPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // This table is basically the "leaderboard". It shows how many points each player got on each task.
        // It's assumed that if there is no relationship between a player and a task, then they are "DNF" and get the DNF_PENALTY points
        // added to their season total.
        Schema::create('player_task', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('player_id');
            $table->unsignedBigInteger('task_id');

            // This is a big integer instead of an unsignedBigInteger in case someone does REALLY well, and we want
            // to give them, say, -1 points for their submission. This would lower their score 2x more than would normally
            // be possible (since 1 is considered the 'perfect score'.
            $table->bigInteger('score');
            $table->foreign('player_id')->references('id')->on('players');
            $table->foreign('task_id')->references('id')->on('tasks');
        });
    }
}
