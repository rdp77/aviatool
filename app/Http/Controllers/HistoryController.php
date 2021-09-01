<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\DataTables;

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

    public function index(Request $req)
    {
        $data = DB::table('student')
            ->select('student.id', 'student.code', 'history.*')
            ->join('history', 'student.id', '=', 'history.s_id')
            ->get();
        // dd($data);
        if ($req->ajax()) {
            $data = DB::table('student')
                ->select('student.id', 'student.code', 'history.*')
                ->join('history', 'student.id', '=', 'history.s_id')
                ->get();
            return Datatables::of($data)
                ->addIndexColumn()
                ->addColumn('date', function ($row) {
                    return date('d F Y H:i:s', strtotime($row->datetime));
                })
                ->addColumn('status', function ($row) {
                    if ($row->info == 'Dipinjam') {
                        return __('Barang Dipinjam');
                    } else if ($row->info == 'Dikembalikan') {
                        return __('Barang Dikembalikan');
                    } else {
                        return __('ERROR');
                    }
                })
                ->rawColumns(['date', 'status'])
                ->make(true);
        }
        return view('pages.transaction.history');
    }
}
