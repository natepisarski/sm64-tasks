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
    // TODO: EVERYTHING IN THIS CONTROLLER SHOULD BE MODEL METHODS

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

        // Return scores ascending; 1 is the best score traditionally.
        usort($leaderboard, fn ($position1, $position2) => $position1['score'] <=> $position2['score']);
        return $leaderboard;
    }

    /**
     * A season's leaderboard is the summation of all task leaderboards in that season.
     * @param Season $season
     */
    public function getLeaderboardForSeason(Season $season)
    {
        $requiredData = $season->tasks()->with('players')->get();

        // This starts off as a map, between player_id and score. Like [4 => 12]
        $leaderboard = [
        ];

        // For each task in a season, we keep a running total.
        foreach ($requiredData as $seasonTask) {
            foreach($seasonTask->players as $seasonTaskPlayer) {
                if (array_key_exists($seasonTaskPlayer->id, $leaderboard)) {
                    $leaderboard[$seasonTaskPlayer->id] += $seasonTaskPlayer->pivot->score;
                } else {
                    $leaderboard[$seasonTaskPlayer->id] = $seasonTaskPlayer->pivot->score;
                }
            }
        }

        // Now that we have our mapping between players and points, we need to put it into the format the React expects.
        $finalLeaderboard = [];
        foreach ($leaderboard as $playerId => $score) {
            array_push($finalLeaderboard, [
                'player' => $seasonTask->players->where('id', $playerId)->first(),
                'score' => $score
            ]);
        }

        return $leaderboard;
    }
}
