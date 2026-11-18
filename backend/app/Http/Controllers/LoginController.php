<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\LoginService;

class LoginController extends Controller
{
    protected $loginService;


    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }

    public function Signup(Request $request)
    {
        return $this->loginService->Signup($request);
    }


    public function Login(Request $request)
    {
        return $this->loginService->Login($request);
    }

    public function Signout(Request $request)
    {
        return $this->loginService->Signout($request);
    }
}
