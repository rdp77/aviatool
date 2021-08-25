<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\StudentClass;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
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
        $student = Student::with('relationClass')->get();
        return view('pages.data.student.indexStudent', ['student' => $student]);
    }

    public function create()
    {
        $code = "S-" . str_pad($this->FunctionController->getRandom('items'), 5, '0', STR_PAD_LEFT);
        $studentClass = StudentClass::all();
        return view('pages.data.student.createStudent', [
            'code' => $code, 'studentClass' => $studentClass
        ]);
    }

    public function store(Request $req)
    {
        Validator::make($req->all(), [
            'name' => 'required',
            'class' => 'required',
        ])->validate();

        Student::create([
            'code' => $req->code,
            'name' => $req->name,
            'c_id' => $req->class
        ]);

        return Redirect::route('student.index');
    }

    public function edit($id)
    {
        $student = Student::find($id);
        $studentClass = StudentClass::all();
        return view('pages.data.student.updateStudent', [
            'student' => $student, 'studentClass' => $studentClass
        ]);
    }

    public function update($id, Request $req)
    {
        Validator::make($req->all(), [
            'name' => 'required',
            'class' => 'required',
        ])->validate();

        $student = Student::find($id);
        $student->name = $req->name;
        $student->c_id = $req->class;
        $student->save();
        return Redirect::route('student.index');
    }

    public function destroy($id)
    {
        Student::find($id)->delete();
        return Redirect::route('student.index');
    }
}
