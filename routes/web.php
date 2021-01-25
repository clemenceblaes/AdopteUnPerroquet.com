<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function() {
    Route::get('init', 'App\Http\Controllers\AppController@init');
    Route::post('login', 'App\Http\Controllers\AppController@login');
    Route::post('register', 'App\Http\Controllers\AppController@register');
    Route::post('logout', 'App\Http\Controllers\AppController@logout');
});
