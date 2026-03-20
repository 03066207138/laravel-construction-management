<?php

namespace App\Http\Controllers\admin;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\TempImg;
use Illuminate\Support\Str;


class ProjectController extends Controller
{
    // this method will return all projects
    public function index() {}



    //   this method will store new project
    public function store(Request $request)
    {


        $request->merge(['slug' => Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug'  => 'required|unique:projects,slug'

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        // 1️⃣ Save project data first
        $project = new Project();
        $project->title = $request->title;
        $project->short_desc = $request->short_desc;
        $project->slug = Str::slug($request->slug);
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->content = $request->content;
        $project->status = $request->status;
        $project->save();

        // 2️⃣ Attach image from TempImg (SINGLE IMAGE)
        if ($request->imageId > 0) {

            $tempImg = TempImg::find($request->imageId);

            if ($tempImg != null) {
            }
        }



        return response()->json([
            'status' => true,
            'message' => 'Project created successfully',
            'data' => $project
        ]);
    }
}
