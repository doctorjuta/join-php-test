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
        if ($request->filled('candemail')) {
            $candidate->email = $this->validateVal($request->input('candemail'));
        }
        if ($request->filled('candpasswd')) {
            $candidate->password = Hash::make($request->input('candpasswd'));
        }
        if ($request->filled('candfname')) {
            $candidate->first_name = $this->validateVal($request->input('candfname'));
        }
        if ($request->filled('candlname')) {
            $candidate->last_name = $this->validateVal($request->input('candlname'));
        }
        if ($request->filled('candtel')) {
            $candidate->phone = $this->validateVal($request->input('candtel'));
        }
        if ($request->hasFile('candphoto')) {
            $file = $request->file('candphoto');
            $hashName = $file->hashName();
            try {
                $img = \Image::make($file)->fit(100, 100);
                $img->save(storage_path('app/public/'.$hashName));
                $candidate->photo_url = 'storage/'.$hashName;
            } catch (Exception $e) {
                return $this->sendJSONError($e->getMessage());
            }
        }
        $candidate->save();
        return $this->sendJSONOk('Form was submitted successfully.');
    }


    public function rem_candidate(Request $request)
    {
        if (!$request->has('cand_id')) {
            return $this->sendJSONError('Invalid request.');
        }
        $cand_id = $this->validateVal($request->input('cand_id'));
        $candidate = Candidates::find($cand_id);
        $candidate->delete();
        return $this->sendJSONOk('Candidate was removed successfully.');
    }


    public function uptd_candidate(Request $request)
    {
        if (!$request->has('cand_id')) {
            return $this->sendJSONError('Invalid request.');
        }
        $cand_id = $this->validateVal($request->input('cand_id'));
        $candidate = Candidates::find($cand_id);
        if ($request->has('new_state')) {
            $candidate->state = $this->validateVal($request->input('new_state'));
        }
        $candidate->save();
        $html = view('candidates.badge', ['item' => $candidate])->render();
        return $this->sendJSONOk($html);
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
