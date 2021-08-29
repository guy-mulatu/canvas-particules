<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class VueController extends BaseController
{
    public function index()
    {
        return view('/vue');
    }


}
