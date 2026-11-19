<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\LoginController;

Route::post('/register', [LoginController::class, 'Signup']);
Route::post('/login', [LoginController::class, 'Login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/signout', [LoginController::class, 'Signout']);
});
