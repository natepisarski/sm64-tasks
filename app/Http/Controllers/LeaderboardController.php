<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\Season;
use App\Models\Task;

/**
 * This controller is for returning Leaderboard data. Given a 'Leader-board-able' type, like a Task or a Season,
 * it will return a structure that looks like this:
 * [
 *   {
 *     'player_id': x,
 *     'score': y
 *   }
 * ]
 *
 * for Seasons, all of the Tasks' individual leaderboards are compressed into 1 single leaderboard.
 *
 * Class LeaderboardController
 * @package App\Http\Controllers
 */
class LeaderboardController extends Controller
{
    /**
     * Returns the leaderboard for 1 task.
     * @param Task $task The task object
     */
    public function getLeaderboardForTask(Task $task)
    {
        $players = $task->players;
        $leaderboard = [];

        foreach ($players as $player) {
            array_push($leaderboard, [
                'player' => $player,
                'score' => $player->pivot->score,
            ]);
        }

        return $leaderboard;
    }

    public function getLeaderboardForSeason(Season $season)
    {
        // TODO: Implement season leaderboards
    }
}
