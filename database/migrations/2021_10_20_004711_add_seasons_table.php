<?php
declare(strict_types = 1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSeasonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seasons', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->timestamps();
        });

        // Now we have to add season related information into tasks.
        Schema::table('tasks', function (Blueprint $table) {
            $table->unsignedBigInteger('season_id')->nullable()->after('image');
            $table->foreign('season_id')->references('id')->on('seasons');
        });
    }
}
