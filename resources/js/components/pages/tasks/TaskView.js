/**
 * This is the component that shows you 1 particular task.
 */
import {Rules} from "../../Rules";
import {useEffect, useState} from "react";
import {Leaderboard} from "../../Leaderboard";
import {Link} from "react-router-dom";
import {formatDateTime} from "../../../utilities";
import {ClickableLink} from "../../pieces/ClickableLink";
import moment from "moment";

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
        video_url,
        task_category,
        image
    } = task;
    description = description ?? 'No Description';
    const category = task_category?.name ?? 'No Category';

    let blurStyle = {};
    // if (!started_at || moment.utc(started_at).isAfter(moment())) {
    //     location.href = '/tasks';
    //     blurStyle = {filter: 'blur(15px)'};
    // }

    useEffect(() => {
        fetch(`/api/tasks/${id}/leaderboard`)
            .then(response => response.json())
            .then(data => setLeaderboard(data));
    }, []);

    const clickableSeason = <ClickableLink name={season.name} onClick={onSeasonClick} color={'green'}/>
    const clickableStage = stage ?
        <ClickableLink name={stage.name} onClick={onStageClick} color={'red'} size={'text-lg'}/> : null;
    const embeddedVideo = video_url ?
        <iframe width="560" height="315" src={video_url}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
        : null;

    return <div className={`md:p-12`} style={blurStyle}>
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
                rightColumnFormatter={(score, player) => <ClickableLink onClick={player.pivot.video_url ? () => location.href = player.pivot.video_url : null} color={'indigo'} name={score} size={'text-normal'} /> }

            />
        </div>
        <div className={'flex flex-row w-full justify-center mb-5'}>
            <img src={image}/>
        </div>
        <div className={'flex flex-row w-full justify-center mb-5'}>
            {embeddedVideo}
        </div>
        <div className={'text-2xl font-semibold text-4xl'}>Rules</div>
        <Rules slug={slug}/>
    </div>
};
