<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Concerns\TaskCRUD;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $request, TaskCRUD $taskCRUD)
    {
        $taskCRUD->updateOrCreate(null, $request->all());
    }

    public function update(Task $task, TaskCRUD $taskCRUD, Request $request)
    {
        $taskCRUD->updateOrCreate($task, $request->all());
    }

    public function index()
    {
        // TODO: Start returning this with a resource.
        $sorted = Task::all()->sortByDesc('ended_at');
        return $sorted->values();
    }
}
