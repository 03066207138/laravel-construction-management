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

   public function store(Request $request)
    {
        try {
            $request->merge([
                'slug' => Str::slug($request->slug ?? $request->title)
            ]);

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

            $project = new Project();
            $project->title = $request->title;
            $project->slug = $request->slug;
            $project->short_desc = $request->short_desc;
            $project->content = $request->content;
            $project->construction_type = $request->construction_type;
            $project->sector = $request->sector;
            $project->location = $request->location;
            $project->image = $request->image ?? null;
            $project->status = $request->status ?? 1;
            $project->save();

            return response()->json([
                'status' => true,
                'message' => 'Project created successfully',
                'data' => $project
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'error' => $e->getMessage(),
                'line' => $e->getLine()
            ], 500);
        }
    }
}
