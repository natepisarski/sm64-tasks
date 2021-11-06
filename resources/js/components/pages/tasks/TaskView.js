/**
 * This is the component that shows you 1 particular task.
 */
import {Rules} from "../../Rules";
import {useEffect, useState} from "react";
import {Leaderboard} from "../../Leaderboard";
import {Link} from "react-router-dom";
import {ClickableLink} from "../../Cards";
import {formatDateTime} from "../../../utilities";

// Comes from task: id, slug, name, title, started_at, ended_at, season, stage, description (?? 'No Description), category (??NoCat), image,
export const TaskView = ({
                             task,
                             onStageClick,
                             onSeasonClick,
                             onCategoryClick
                         }) => {
    const [leaderboard, setLeaderboard] = useState([]);

    let {
        id,
        slug,
        name,
        started_at,
        ended_at,
        season,
        stage,
        description,
        task_category,
        image
    } = task;
    description = description ?? 'No Description';
    const category = task_category?.name ?? 'No Category';

    useEffect(() => {
        fetch(`/api/tasks/${id}/leaderboard`)
            .then(response => response.json())
            .then(data => setLeaderboard(data));
    }, []);

    const clickableSeason = <ClickableLink name={season.name} onClick={onSeasonClick} color={'green'}/>
    const clickableStage = stage ?
        <ClickableLink name={stage.name} onClick={onStageClick} color={'red'} size={'text-lg'}/> : null;

    return <div className={'md:p-12'}>
        <div className={'text-4xl font-semibold text-center'}>{name}</div>
        <div className={'flex flex-1 text-sm whitespace-nowrap font-light text-gray-700 text-center justify-center'}>
            {formatDateTime(started_at)} - {formatDateTime(ended_at)}
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
