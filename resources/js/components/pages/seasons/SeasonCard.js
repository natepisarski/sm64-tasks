import {Card} from "../../Cards";

/**
 * A Card for seasons. We don't have as much data for seasons as we do for Tasks, so this is much slimmer.
 */
export const SeasonCard = ({id, title, tasks, onSeasonClick, color, border}) => {
    const taskLength = tasks.length;
    let description = taskLength + (taskLength === 1 ? ' task' : ' tasks');

    return <Card title={title} onClick={taskLength > 0 ? onSeasonClick : null} color={color} border={border}
                 description={description} />
};
