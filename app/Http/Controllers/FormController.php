<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Candidates;

class FormController extends Controller
{
    public function new_candidate(Request $request)
    {
        $candidate = new Candidates;
        if ($request->has('candemail')) {
            $candidate->email = $this->validateVal($request->candemail);
        }
        if ($request->has('candpasswd')) {
            $candidate->password = Hash::make($request->candpasswd);
        }
        if ($request->has('candfname')) {
            $candidate->first_name = $this->validateVal($request->candfname);
        }
        if ($request->has('candlname')) {
            $candidate->last_name = $this->validateVal($request->candlname);
        }
        if ($request->has('candtel')) {
            $candidate->phone = $this->validateVal($request->candtel);
        }
        if ($request->hasFile('candphoto')) {
            $file = $request->file('candphoto');
            $hashName = $file->hashName();
            try {
                $path = $file->storeAs(
                    'public',
                    $hashName,
                    'local'
                );
                $candidate->photo_url = $path;
            } catch (Exception $e) {
                return $this->sendJSONError($e->getMessage());
            }
        }
        $candidate->save();
        return $this->sendJSONOk('Form was submitted successfully.');
    }


    private function validateVal($val)
    {
        return htmlentities(strip_tags($val), ENT_QUOTES, "UTF-8");
    }


    private function sendJSONError($txt)
    {
        return response()->json([
            'error' => $txt
        ]);
    }


    private function sendJSONOk($txt)
    {
        return response()->json([
            'message' => $txt
        ]);
    }
}
