<?php
declare(strict_types=1);

namespace App\Concerns;

use App\Models\Season;
use App\Models\Stage;
use App\Models\Task;
use App\Models\TaskCategory;
use Carbon\Carbon;
use JetBrains\PhpStorm\ArrayShape;

class TaskCRUD
{
    public function updateOrCreate(?Task $task, #[ArrayShape([
        'name' => 'string',
        'categoryName' => 'string',
        'description' => 'string',
        'startedAt' => 'string',
        'endedAt' => 'string',
        'image' => 'string',
        'seasonName' => 'string',
        'slug' => 'string',
        'stageSlug' => 'string',
        'videoUrl' => 'string',
    ])] array $taskData) {
        if (is_null($task)) {
            $task = (new Task);
        }

        $categoryWithName = TaskCategory::where('name', $taskData['categoryName'])->first();
        $seasonWithName = Season::where('name', $taskData['seasonName'])->first();
        $stageWithSlug = Stage::where('slug', $taskData['stageSlug'])->first();

        $task->name = $taskData['name'];
        $task->category_id = $categoryWithName->id;
        $taskData->description = $taskData['description'];
        $taskData->started_at = (new Carbon($taskData['startedAt'], 'America/New_York'))->utc();
        $taskData->ended_at = (new Carbon($taskData['endedAt'], 'America/New_York'))->utc();
        $taskData->image = $taskData['image'];
        $taskData->season_id = $seasonWithName->id;
        $taskData->slug = $taskData['slug'];
        $taskData->stage_id = $stageWithSlug->id;
        $taskData->video_url = $taskData['videoUrl'];

        dd($taskData);
    }
}
