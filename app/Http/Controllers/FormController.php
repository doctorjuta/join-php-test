<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('ufile')) {
            $file = $request->file('ufile');
            $hashName = $file->hashName();
            try {
                $path = $file->storeAs(
                    'public',
                    $hashName,
                    'local'
                );
                return $this->sendJSONOk(asset($path));
            } catch (Exception $e) {
                return $this->sendJSONError($e->getMessage());
            }
        }
        return $this->sendJSONError('File was not provided.');
    }


    public function sendJSONError($txt)
    {
        return response()->json([
            'error' => $txt
        ]);
    }


    public function sendJSONOk($txt)
    {
        return response()->json([
            'message' => $txt
        ]);
    }
}
