<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class FunctionController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function getRandom($table)
    {
        do {
            $random = rand(00001, 99999);
            $check = DB::table($table)
                ->select('code')
                ->having('code', '=', $random)
                ->first();
        } while ($check != null);
        return $random;
    }

    public function createCupboard($total)
    {
        $data = array();
        for ($i = 1; $i < $total + 1; $i++) {
            $contents = "Lemari " . $i;
            array_push($data, $contents);
        }
        return json_encode($data);
    }

    public function countID($table)
    {
        return DB::table($table)->count() == 0 ?
            1 :
            DB::table($table)
            ->select('id')
            ->orderByDesc('id')
            ->limit('1')
            ->first()->id + 1;
    }
}
