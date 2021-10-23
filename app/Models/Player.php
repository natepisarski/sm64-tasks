<?php
declare (strict_types = 1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    public function tasks()
    {
        return $this->belongsToMany(Task::class)->withPivot([''])
    }
}
