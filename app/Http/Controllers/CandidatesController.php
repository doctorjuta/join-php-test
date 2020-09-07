<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Candidates;

class CandidatesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $candidates = Candidates::orderBy('created_at', 'desc')->get();
        return view('candidates', [
            'candidates' => $candidates,
            'all_states' => Candidates::get_all_states()
        ]);
    }
}
