<?php

namespace App\Http\Controllers;

use App\Models\Borrow;
use App\Models\History;
use App\Models\Items;
use App\Models\Student;
use App\Models\Transaction;
use App\Models\Workshop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BorrowController extends Controller
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
        $borrow = Transaction::with('relationBorrow', 'relationWorkshop')
            ->get();
        return view('pages.transaction.borrow.indexBorrow', ['borrow' => $borrow]);
    }

    public function create()
    {
        $student = Student::with('relationClass')->get();
        return view('pages.transaction.borrow.createBorrow', [
            'code' => $this->createCode(),
            'workshop' => Workshop::all(),
            'student' => $student,
            'items' => Items::all()
        ]);
    }

    public function store(Request $req)
    {
        Validator::make($req->all(), [
            'code' => 'required',
            'workshop' => 'required',
            'student' => 'required'
        ])->validate();

        if ($req->items == null) {
            return Redirect::route('borrow.create', [
                'code' => $this->createCode(),
                'workshop' => Workshop::all(),
                'items' => Items::all()
            ])->with(['status' => 'Pastikan sudah menambahkan barang minimal 1']);
        }

        Borrow::create([
            'code' => $req->code,
            'date' => date('Y-m-d'),
            'barcode' => 'sd',
            'info' => $req->info
        ]);

        $borrowID = DB::table('borrow')
            ->select('id')
            ->orderByDesc('id')
            ->limit('1')
            ->first()->id;

        Transaction::create([
            'id' => $this->FunctionController->countID('transaction'),
            'b_id' => $borrowID,
            'i_id' => json_encode($req->items),
            'w_id' => $req->workshop,
            's_id' => $req->student,
            'history' => 0
        ]);

        for ($i = 0; $i < count($req->items); $i++) {
            DB::table('items')
                ->where('id', $req->items[$i])
                ->update(['status' => "Dipinjam"]);
        }

        History::create([
            'datetime' => date("Y-m-d H:i:s"),
            's_id' => $req->student,
            'i_id' => json_encode($req->items),
            'info' => 'Dipinjam'
        ]);

        return Redirect::route('borrow.index');
    }

    public function destroy($id)
    {
        $transaction = Transaction::find($id);
        Borrow::find($transaction->b_id)->delete();
        for ($i = 0; $i < count(json_decode($transaction->i_id)); $i++) {
            DB::table('items')
                ->where('id', json_decode($transaction->i_id)[$i])
                ->update(['status' => "Ada"]);
        }

        History::create([
            'datetime' => date("Y-m-d H:i:s"),
            's_id' => $transaction->s_id,
            'i_id' => $transaction->i_id,
            'info' => 'Dikembalikan'
        ]);

        $transaction->delete();

        return Redirect::route('borrow.index');
    }

    public function show($id)
    {
        $transaction = Transaction::with('relationBorrow')->find($id);
        $codeItems = $nameItems = array();
        for ($i = 0; $i < count(json_decode($transaction->i_id)); $i++) {
            $items = Items::find(json_decode($transaction->i_id)[$i]);
            $code = $items->code;
            $name = $items->name;
            array_push($codeItems, $code);
            array_push($nameItems, $name);
        }
        return response()->json([
            'items' => $codeItems,
            'name' => $nameItems,
            'code' => $transaction->relationBorrow->code
        ]);
    }

    public function createCode()
    {
        return "TRS-" . str_pad($this->FunctionController->getRandom('borrow'), 5, '0', STR_PAD_LEFT);
    }
}
