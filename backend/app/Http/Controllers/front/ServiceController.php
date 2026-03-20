<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\services;

class ServiceController extends Controller
{
    //This method will return all active services
    public function index()
    {
        $services =  services::where('status', 1)->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' =>  $services

        ]);
    }
    // this method will return latest active services

    public function latestServices(Request $request)
    {
        $services =  services::where('status', 1)
            ->take($request->get('limit', 5))
            ->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' =>  $services

        ]);
    }
}
