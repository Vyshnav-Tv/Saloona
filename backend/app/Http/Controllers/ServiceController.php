<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ServicesService;

class ServiceController extends Controller
{
   protected $sr_Service;


    public function __construct(ServicesService $sr_Service)
    {
        $this->sr_Service = $sr_Service;
    }

    



}
