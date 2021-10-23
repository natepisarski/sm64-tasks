<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\Season;

class SeasonController extends Controller
{
    public function index()
    {
        return Season::with('tasks')->get();
    }
}
