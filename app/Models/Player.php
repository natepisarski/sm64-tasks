<?php
declare (strict_types = 1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Represents a participant in the competition. Players, in this system, can complete tasks and be given a certain
 * score.
 *
 * Class Player
 * @package App\Models
 */
class Player extends Model
{
    public function tasks()
    {
        return $this->belongsToMany(Task::class)->withPivot(['score', 'video_url']);
    }
}
