<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\Season;

class SeasonController extends Controller
{
    public function index()
    {
        // TODO: Start returning this with a resource
        return Season::with('tasks')->get()->sortByDesc('');
    }
}
