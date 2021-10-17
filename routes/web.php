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
    Route::prefix('tasks')->group(function () {
        Route::get('', [\App\Http\Controllers\TaskController::class, 'index'])->name('tasks.index');
    });
});

Route::view('/{path?}', 'react-root')
    ->where('path', '.*')
    ->name('react');
