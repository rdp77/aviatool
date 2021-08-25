<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function index()
    {
        return view('auth.passwords.reset');
    }

    public function changePass(Request $req)
    {
        $this->validate($req, [
            'oldPassword' => ['required', 'string', 'min:8'],
            'password' => ['required', 'string', 'min:8'],
            'username' => ['required', 'string'],
        ]);

        if (Auth::user()->username != $req->username) {
            return redirect()->route('changePassword')
                ->with(['status' => 'Username sebelumnya tidak sama silahkan cek kembali']);
        }

        $user = User::find(Auth::user()->id);

        if (Hash::check($req->oldPassword, Auth::user()->password)) {
            $user->password = Hash::make($req->password);
            $user->save();
            Auth::logout();
            return redirect('/login');
        } else {
            return redirect()->route('changePassword')
                ->with(['status' => 'Password sebelumnya tidak sama silahkan cek kembali']);
        }
    }
}
