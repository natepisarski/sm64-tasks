<?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

/**
 * Controller that deals with players.
 *
 * Class PlayerController
 * @package App\Http\Controllers
 */
class PlayerController extends Controller
{
    public function index(Request $request)
    {
        return Player::with('tasks')->get();
    }
}
