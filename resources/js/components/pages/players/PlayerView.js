import {calculateTaskScore} from "../../../utilities";
import {Leaderboard} from "../../Leaderboard";
import {Link} from "react-router-dom";
import {PlayerBubble} from "./PlayerBubble";
import {useState} from "react";
import {SeasonFilter} from "../seasons/SeasonFilter";

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
          {
          id: x,
          name: "SSL: All Boxes",
          pivot: {"score": 4},
          season: {
            id: xx,
            name: yy,
          }
        ]

        We can use this to make a Leaderboard, with Tasks on the left and Score on the right.

        Now, what if you wanted to see how a player did in Season 1? For this, we have a filter for season. The first option,
        'Every Season', causes ALL seasons to be used.

     */
    const [seasonFilter, setSeasonFilter] = useState(null);

    const filteredTasks = getFilteredTasks(seasonFilter, player.tasks);
    const uniqueSeasons = getUniqueSeasons(player.tasks);

    console.debug('VIEWING THIS PLAYER: ', player);
    return <div className={'list-none mb-6'}>
        <PlayerBubble player={player} />
        <SeasonFilter seasons={uniqueSeasons} onSeasonClick={season => setSeasonFilter(season.id)} />
        <div className={'flex flex-row w-full justify-center my-5'}>
            <div className={'flex flex-col w-full'}>
                <div className={'flex flex-row justify-center font-semibold'}>
                    TaskScore: <span className={'font-bold text-blue-500 ml-2'}>{calculateTaskScore(filteredTasks)}</span>
                </div>
                <Leaderboard
                    leaderboardData={filteredTasks}
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

/**
 * Gets a filtered list of tasks using the season filter.
 * @param seasonFilter The ID of a season that you're filtering by, or 'null' for all seasons.
 * @param tasks The total list of tasks the player has participated in.
 */
export const getFilteredTasks = (seasonFilter, tasks) => {
    if (seasonFilter === null || seasonFilter === 'all') {
        return tasks;
    }

    return tasks.filter(task => task.season?.id === seasonFilter);
};

/**
 * Given a list of tasks with a hydrated 'seasons' property, this will return a definitive list of season objects.
 * @param taskList The list of tasks that a player has completed.
 */
export const getUniqueSeasons = (taskList) => {
    let uniqueSeasons = [];
    let uniqueSeasonIds = []; // Lazy coding. idk if Javascript will use its ghetto object equality with includes() so this is just to be safe.

    for (const task of taskList) {
        if (!task.season || uniqueSeasonIds.includes(task.season?.id)) {
            // This task falls outside of any season, or we have already seen this season.
            continue;
        }

        uniqueSeasons.push(task.season);
        uniqueSeasonIds.push(task.season.id);
    }

    return uniqueSeasons;
};
