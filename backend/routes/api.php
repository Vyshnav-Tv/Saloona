<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\LoginController;

Route::post('/register', [LoginController::class, 'Signup']);
Route::post('/login', [LoginController::class, 'Login']);
Route::post('/signout', [LoginController::class, 'Signout']);



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
