<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\admin\TempImgController;
use App\Http\Controllers\admin\ServicesController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthenticationController::class, 'login']);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/get-services', [FrontServiceController::class, 'index']);
Route::get('/get-latest-services', [FrontServiceController::class, 'latestServices']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    // protected route
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/logout', [AuthenticationController::class, 'logout']);
    // store%%%%%%%
    Route::post('/services', [ServicesController::class, 'store']);
    Route::get('/services', [ServicesController::class, 'index']);
    Route::put('/services/{id}', [ServicesController::class, 'update']);
    Route::get('/services/{id}', [ServicesController::class, 'show']);
    Route::delete('/services/{id}', [ServicesController::class, 'destroy']);
    // %%%%%%%%%%%%%Temp Image route
    Route::post('/TempImg', [TempImgController::class, 'store']);
});
