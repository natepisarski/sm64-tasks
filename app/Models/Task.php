<?php
declare(strict_types = 1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Task
 * @package App\Models
 *
 * Represents an SM64 task in the system. A task is a mission to complete in-game.
 */
class Task extends Model
{
    protected $with = ['taskCategory', 'season', 'stage'];

    public function taskCategory()
    {
        return $this->belongsTo(TaskCategory::class);
    }

    public function season()
    {
        return $this->belongsTo(Season::class);
    }

    public function stage()
    {
        return $this->belongsTo(Stage::class);
    }

    public function players()
    {
        return $this->belongsToMany(Player::class)->withPivot(['score', 'video_url']);
    }
}
