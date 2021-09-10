<?php

namespace App\Http\Controllers;

use App\Models\Workshop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class WorkshopController extends Controller
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
        $workshop = Workshop::all();
        return view('pages.data.workshop.indexWorkshop', ['workshop' => $workshop]);
    }

    public function create()
    {
        return view('pages.data.workshop.createWorkshop');
    }

    public function store(Request $req)
    {
        Validator::make($req->all(), [
            'name' => 'required',
        ])->validate();

        $duplicate = DB::table('workshop')
            ->having('name', '=', $req->name)
            ->first();

        if ($req->cupboard == null) {
            return Redirect::route('workshop.create')
                ->with(['status' => 'Pastikan sudah menambahkan lemari minimal 1']);
        } else if ($duplicate != null) {
            return Redirect::route('workshop.create')
                ->with(['status' => 'Terdapat duplikasi nama pada workshop, gunakan nama lainnya']);
        }

        Workshop::create([
            'name' => Str::upper($req->name),
            'cupboard' => json_encode($req->cupboard)
        ]);

        return Redirect::route('workshop.index');
    }

    public function destroy($id)
    {
        Workshop::find($id)->delete();
        return Redirect::route('workshop.index');
    }

    public function show($id)
    {
        $workshop = Workshop::find($id);
        $nameItems = array();

        for ($i = 0; $i < count(json_decode($workshop->cupboard)); $i++) {
            array_push($nameItems, json_decode($workshop->cupboard)[$i]);
        }

        return response()->json([
            'name' => $nameItems,
        ]);
    }
}
