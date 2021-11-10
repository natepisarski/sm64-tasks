import moment from "moment";
import {ClickableLink} from "../../pieces/ClickableLink";
import {formatDateTime} from "../../../utilities";
import {Card} from "../../Cards";

/**
 * A Card for showing the preview for 1 particular Task. This is one of the most important components in all of
 * sm64tasks, so it will likely grow in complexity even more as the site grows.
 */
export const TaskCard = ({
                             task,
                             onCategoryClick,
                             onTaskClick,
                             onSeasonClick,
                             onStageClick,
                         }) => {
    let {
        name,
        image,
        description,
        task_category,
        stage,
        started_at,
        ended_at,
        season
    } = task
    let seasonName = season?.name;
    let category = task_category?.name ?? 'No Category';
    description = description ?? 'No Description';

    const renderedImage = <img width={256} height={256} className="h-48 w-full object-cover" src={image} alt=""/>;

    let isFuture = false;
    if (started_at && moment(started_at).isAfter(moment())) {
        isFuture = true;
    }

    const [categoryClickHandler, seasonClickHandler, taskClickHandler, stageClickHandler] = !isFuture
        ? [onCategoryClick, onSeasonClick, onTaskClick, onStageClick]
        : [null, null, null, null];

    const clickableCategory = <ClickableLink name={category} onClick={categoryClickHandler}/>
    const clickableSeason = <ClickableLink name={seasonName} onClick={seasonClickHandler} color={'green'}/>
    const clickableStage = stage ? <ClickableLink name={stage.name} onClick={onStageClick} color={'red'} /> : null;

    // If this task has already ended, we want to give it a slight gray look.
    let color = 'bg-white';
    if (ended_at && moment(ended_at).isBefore(moment())) {
        color = 'bg-gray-200';
    }

    return <Card
        title={name}
        style={isFuture ? {filter: 'blur(10px)', userSelect: 'none'} : {}}
        hero={renderedImage}
        onClick={taskClickHandler}
        description={description}
        color={color}
        preTitle={clickableCategory}>
        {/* We want to show the dates, and the season. */}
        <div className={'flex flex-col w-full gap-y-2'}>
            <div className={'flex flex-row'}>
                <div className={'flex flex-1'}>
                    {clickableSeason}
                </div>
                <div className={'flex flex-1 text-sm whitespace-nowrap font-light text-gray-700'}>
                    {formatDateTime(started_at)} - {formatDateTime(ended_at)}
                </div>
            </div>
            <div className={'flex flex-row'}>
                {clickableStage}
            </div>
        </div>
    </Card>
};
