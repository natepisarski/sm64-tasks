/**
 * This is the component that shows you 1 particular task.
 */
import {Rules} from "../../Rules";
import {useEffect, useState} from "react";
import {Leaderboard} from "../../Leaderboard";
import {Link} from "react-router-dom";
import {ClickableLink, formatDateTime} from "../../Cards";

// TODO: Should probably refactor to take a Task object
export const TaskView = ({
                             id,
                             title,
                             image,
                             startedAt,
                             endedAt,
                             stage,
                             season,
                             onStageClick,
                             onSeasonClick,
                             description,
                             category,
                             slug,
                             onCategoryClick
                         }) => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch(`/api/tasks/${id}/leaderboard`)
            .then(response => response.json())
            .then(data => setLeaderboard(data));
    }, []);

    const clickableSeason = <ClickableLink name={season.name} onClick={onSeasonClick} color={'green'}/>
    const clickableStage = stage ? <ClickableLink name={stage.name} onClick={onStageClick} color={'red'} size={'text-lg'}/> : null;

    return <div className={'md:p-12'}>

        <div className={'text-4xl font-semibold text-center'}>{title}</div>
        <div className={'flex flex-1 text-sm whitespace-nowrap font-light text-gray-700 text-center justify-center'}>
            {formatDateTime(startedAt)} - {formatDateTime(endedAt)}
        </div>
        <div
            className={'text-purple-500 text-sm font-medium hover:underline mb-4 text-center cursor-pointer'}
            onClick={onCategoryClick}>
            {category}
        </div>
        <div className={'flex flex-row justify-center'}>
            <div className={'cursor-pointer'}>
                {clickableStage}
            </div>
        </div>
        <div className={'flex flex-row justify-center'}>
            <div className={'cursor-pointer'}>
                {clickableSeason}
            </div>
        </div>
        <p className={'text-gray-500 text-base mb-5 text-center'}>{description}</p>
        <div className={'flex flex-row w-full justify-center'}>
            <Leaderboard
                leaderboardData={leaderboard}
                leftColumnFormatter={player => <Link className={'text-purple-500 hover:underline'}
                                                     to={`/players/${player.id}`}>{player.name}</Link>}
            />
        </div>
        <div className={'flex flex-row w-full justify-center mb-5'}>
            <img src={image}/>
        </div>
        <div className={'text-2xl font-semibold text-4xl'}>Rules</div>
        <Rules slug={slug}/>
    </div>
};
