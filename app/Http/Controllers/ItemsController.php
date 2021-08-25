<?php

namespace App\Http\Controllers;

use App\Models\Items;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class ItemsController extends Controller
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
        $items = Items::all();
        return view('pages.data.items.indexItems', ['items' => $items]);
    }

    public function create()
    {
        $code = "ITM-" . str_pad($this->FunctionController->getRandom('items'), 5, '0', STR_PAD_LEFT);
        return view('pages.data.items.createItems', ['code' => $code]);
    }

    public function store(Request $req)
    {
        $this->validate($req, [
            'code' => 'required',
            'name' => 'required',
            'condition' => 'required'
        ]);

        Items::create([
            'code' => $req->code,
            'name' => $req->name,
            'status' => 'Ada',
            'condition' => $req->condition == 1 ? 'Bagus' : 'Buruk',
            'info' => $req->info
        ]);

        return Redirect::route('items.index');
    }

    public function edit($id)
    {
        $items = Items::find($id);
        return view('pages.data.items.updateItems', ['items' => $items]);
    }

    public function update($id, Request $req)
    {
        Validator::make($req->all(), [
            'name' => 'required',
            'condition' => 'required'
        ])->validate();

        $items = Items::find($id);
        $items->name = $req->name;
        $items->condition = $req->condition == 1 ? 'Bagus' : 'Buruk';
        $items->info = $req->info;
        $items->save();
        return Redirect::route('items.index');
    }

    public function destroy($id)
    {
        Items::find($id)->delete();
        return Redirect::route('items.index');
    }

    public function print($id)
    {
        $items = Items::find($id)->code;
        return view('layouts.print', ['items' => $items]);
    }
}
