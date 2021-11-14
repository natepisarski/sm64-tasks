<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('api')->group(function () {
    Route::prefix('creator-bundle')->group(function () {
        Route::get('', [\App\Http\Controllers\CreatorBundleController::class, 'index'])->name('create.bundle');
    });

    Route::prefix('tasks')->group(function () {
        Route::get('', [\App\Http\Controllers\TaskController::class, 'index'])->name('tasks.index');

        Route::prefix('{task}')->group(function () {
            Route::get('leaderboard', [\App\Http\Controllers\LeaderboardController::class, 'getLeaderboardForTask'])->name('tasks.leaderboards.index');
        });
    });
    Route::prefix('seasons')->group(function () {
        Route::get('', [\App\Http\Controllers\SeasonController::class, 'index'])->name('seasons.index');

        Route::prefix('{season}')->group(function () {
            Route::get('leaderboard', [\App\Http\Controllers\LeaderboardController::class, 'getLeaderboardForSeason'])->name('seasons.leaderboards.index');
        });
    });
    Route::prefix('players')->group(function () {
        Route::get('', [\App\Http\Controllers\PlayerController::class, 'index'])->name('players.index');
    });
});

Route::view('/{path?}', 'react-root')
    ->where('path', '.*')
    ->name('react');
