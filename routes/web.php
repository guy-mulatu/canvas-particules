<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\VueController;
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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/basics', function (){ return view('basics');});
Route::get('/vue-page', [VueController::class, 'index'])->name('vue');
Route::get('/stripe', [Controller::class, 'index'])->name('vue');
