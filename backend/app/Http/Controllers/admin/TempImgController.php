<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TempImg;

class TempImgController extends Controller
{
   public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'image' => 'required|image|mimes:png,jpg,jpeg,gif|max:2048'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status' => false,
            'errors' => $validator->errors() // use 'errors' not 'error'
        ], 422);
    }

    $image = $request->file('image');
    $ext = $image->getClientOriginalExtension();
    $imageName = time() . '_' . uniqid() . '.' . $ext;

    $model = new TempImg();
    $model->name = $imageName;
    $model->save();

    $image->move(public_path('uploads/temp'), $imageName);

    return response()->json([
        'status' => true,
        'imageId' => $model->id,     // ✅ return the ID
        'imageName' => $imageName,   // optional
        'message' => 'Image uploaded successfully.'
    ]);
}
}
