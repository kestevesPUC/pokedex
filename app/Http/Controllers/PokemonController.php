<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PokemonController extends Controller
{

    public function index(Request $request)
    {
        dd($request);
    }
}
