import {calculateTaskScore} from "../../../utilities";
import {Leaderboard} from "../../Leaderboard";
import {Link} from "react-router-dom";
import {PlayerBubble} from "./PlayerBubble";

/**
 * The view for looking at 1 specific player. This will be their name, avatar, TaskScore, and Task Leaderboard
 * @param player
 * @returns {JSX.Element}
 * @constructor
 */
export const PlayerView = ({player}) => {
    // 'player' comes with a structure called 'tasks', which has this form:
    /*
        "tasks": [
          {id: x, name: "SSL: All Boxes",  pivot: {"score": 4}}
        ]

        We can use this to make a Leaderboard, with Tasks on the left and Score on the right.
     */
    return <div className={'list-none mb-6'}>
        <PlayerBubble player={player}/>
        <div className={'flex flex-row w-full justify-center my-5'}>
            <div className={'flex flex-col w-full'}>
                <div className={'flex flex-row justify-center font-semibold'}>
                    TaskScore: <span className={'font-bold text-blue-500 ml-2'}>{calculateTaskScore(player.tasks)}</span>
                </div>
                <Leaderboard
                    leaderboardData={player.tasks}
                    leftColumnAccessor={task => task}
                    leftColumnName={'Task'}
                    leftColumnFormatter={task => <Link className={'text-purple-500 hover:underline'}
                                                       to={`/tasks/${task.id}`}>{task.name}</Link>}
                    scoreAccessor={task => task.pivot.score}
                />
            </div>
        </div>
    </div>
};
