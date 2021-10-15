<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }
}
