<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentClass;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class StudentClassController extends Controller
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
        $studentClass = StudentClass::all();
        return view('pages.data.studentClass.indexStudentClass', [
            'studentClass' => $studentClass
        ]);
    }

    public function create()
    {
        return view('pages.data.studentClass.createStudentClass');
    }

    public function store(Request $req)
    {
        Validator::make($req->all(), [
            'name' => 'required',
            'max_student' => 'required',
        ])->validate();

        StudentClass::create([
            'name' => $req->name,
            'max' => $req->max_student
        ]);

        return Redirect::route('class.index');
    }

    public function edit($id)
    {
        $studentClass = StudentClass::find($id);
        return view('pages.data.studentClass.updateStudentClass', ['studentClass' => $studentClass]);
    }

    public function update($id, Request $req)
    {
        Validator::make($req->all(), [
            'name' => 'required',
            'max_student' => 'required',
        ])->validate();

        $studentClass = StudentClass::find($id);
        $studentClass->name = $req->name;
        $studentClass->max = $req->max_student;
        $studentClass->save();
        return Redirect::route('class.index');
    }

    public function destroy($id)
    {
        StudentClass::find($id)->delete();
        return Redirect::route('class.index');
    }
}
