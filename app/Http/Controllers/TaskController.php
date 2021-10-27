<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        // TODO: Start returning this with a resource.
        $sorted = Task::all()->sortByDesc('ended_at');
        return $sorted->values();
    }
}
