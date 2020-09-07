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

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/candidates', 'CandidatesController@index')->name('candidates');

Route::post('/api/candidate/new', 'FormController@new_candidate')->name('new_candidate');
Route::post('/api/candidate/remove', 'FormController@rem_candidate')->name('rem_candidate');
Route::post('/api/candidate/update', 'FormController@uptd_candidate')->name('uptd_candidate');
