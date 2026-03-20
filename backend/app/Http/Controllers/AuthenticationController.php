<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthenticationController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false, // ✅ boolean
                'errors' => $validator->errors()
            ], 422);
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = User::find(Auth::id());
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => true, // ✅ boolean
                'message' => 'User logged in successfully',
                'id' => $user->id,
                'token' => $token,
                'token_type' => 'Bearer',
            ], 200);
        }

        return response()->json([
            'status' => false, // ✅ boolean
            'message' => 'Invalid credentials'
        ], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'status' => true, // ✅ boolean
            'message' => 'User logged out successfully'
        ], 200);
    }
}
