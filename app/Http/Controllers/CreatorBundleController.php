<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Season;
use App\Models\Stage;
use App\Models\Task;
use App\Models\TaskCategory;

class CreatorBundleController extends Controller
{
    public function index()
    {
        // This is the creator bundle. It returns all the data that we need to create new tasks in the database.
        // This is any data we need for tasks: Stages, Seasons, Categories.
        return [
            'stages' => Stage::all(),
            'seasons' => Season::all(),
            'categories' => TaskCategory::all(),
            'tasks' => Task::all(),
            'players' => Player::all(),
        ];
    }
}
