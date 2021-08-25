<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class HistoryController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(FunctionController $FunctionController)
    {
        $this->middleware('auth');
        $this->FunctionController = $FunctionController;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index()
    {
        $history = DB::table('student')
            ->select('student.id', 'student.code', 'history.*')
            ->join('history', 'student.id', '=', 'history.s_id')
            ->get();
        return view('pages.transaction.history', ['history' => $history]);
    }
}
