<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('images', 'ImageController@index');
Route::get('images/del', 'ImageController@deleted');
Route::put('images/delete/{image}', 'ImageController@toDelete');
Route::put('images/restore/{image}', 'ImageController@toRestore');
