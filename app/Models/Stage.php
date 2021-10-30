<?php
declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stage extends Model
{
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
