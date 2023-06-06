<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PokemonController extends Controller
{
    private $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index()
    {
        try{
            return view('main.index')
                ->with(['pokemon' => $this->request->all()]);
        } catch (\Exception $e) {
            dd($e);
        }
    }
}
