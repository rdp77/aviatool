<?php

namespace App\Http\Controllers;

use App\Models\Workshop;
use Illuminate\Http\Request;
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
            'cupboard' => 'required|integer|min:1'
        ])->validate();

        Workshop::create([
            'name' => Str::upper($req->name),
            'cupboard' => $this->FunctionController->createCupboard($req->cupboard)
        ]);

        return Redirect::route('workshop.index');
    }

    public function destroy($id)
    {
        Workshop::find($id)->delete();
        return Redirect::route('workshop.index');
    }
}
