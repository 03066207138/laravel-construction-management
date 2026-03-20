<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\services;
use App\Models\TempImg;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = services::orderby('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' =>  $services

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->merge(['slug' => Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug'  => 'required|unique:services,slug'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        // 1️⃣ Save service data first
        $services = new services();
        $services->title = $request->title;
        $services->short_desc = $request->short_desc;
        $services->slug = Str::slug($request->slug);
        $services->content = $request->content;
        $services->status = $request->status;
        $services->save();

        // 2️⃣ Attach image from TempImg (SINGLE IMAGE)
        if ($request->imageId > 0) {

            $tempImg = TempImg::find($request->imageId);

            if ($tempImg != null) {

                $extArray = explode('.', $tempImg->name);
                $ext = last($extArray);
                $filename = strtotime('now') . $services->id . '.' . $ext;

                $sourcePath = public_path('uploads/temp/' . $tempImg->name);
                $destPath = public_path('uploads/services/' . $filename);

                // ✅ MOVE IMAGE
                if (File::exists($sourcePath)) {
                    File::copy($sourcePath, $destPath);   // OR File::move()
                }

                // ✅ SAVE IN DB
                $services->image = $filename;
                $services->save();

                // OPTIONAL: delete temp image
                File::delete($sourcePath);
                $tempImg->delete();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Service added successfully',
            'data' => $services
        ]);
    }



    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $service = services::find($id);
        if ($service == null) {
            return response()->json([
                'status' => false,
                'message' => 'Service not Found....'
            ], 422);
        }

        return response()->json([
            'status' => true,
            'data' => $service

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(services $services)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $service = services::find($id);

        if ($service == null) {
            return response()->json([
                'status' => false,
                'message' => 'Service not Found....'
            ], 422);
        }


        $Validator = Validator::make($request->all(), [

            'title' => 'required',
            'slug'  =>  'required|unique:services,slug,' . $id . 'id'

        ]);

        if ($Validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $Validator->errors(),
            ], 422);
        }
        $service->title = $request->title;
        $service->short_desc = $request->short_desc;
        $service->slug = Str::Slug($request->slug);
        $service->content = $request->content;
        $service->status = $request->status;
        $service->save();


        // save temp image here
        if ($request->imageId > 0) {
            $oldImage = $service->image;

            $tempImg = TempImg::find($request->imageId);

            if ($tempImg != null) {

                $extArray = explode('.', $tempImg->name);
                $ext = last($extArray);
                $filename = strtotime('now') . $service->id . '.' . $ext;

                $sourcePath = public_path('uploads/temp/' . $tempImg->name);
                $destPath = public_path('uploads/services/' . $filename);

                // ✅ STORE IMAGE IN DATABASE
                $service->image = $filename;
                $service->save();

                // delete previous image from services folder

                if ($oldImage != '') {
                    file::delete(public_path('uploads/services/' . $oldImage));
                }




                // $tempImg->delete();
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Service updated Successfully....',

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service = services::find($id);
        if ($service == null) {
            return response()->json([
                'status' => false,
                'message' => 'Service not Found....'
            ], 422);
        }

        $service->delete();
        return response()->json([
            'status' => true,
            'data' => $service

        ]);
    }
}
