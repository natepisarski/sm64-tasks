import {useState} from "react";
import {useParams} from "react-router";

/**
 * This page shows a list of all the active tasks. When you select a task, it will show you an overlay of that task.
 * @returns {JSX.Element}
 * @constructor
 */
export const TaskIndex = ({}) => {
    let { taskId } = useParams();
    const [currentTaskId, setTaskId] = useState(taskId);
    console.debug('This is the task ID: ', taskId, currentTaskId);

    return <div>
        <div>Task Index</div>
        { currentTaskId == 1 ? 'Viewing Task 1' : 'Viewing no task'}
    </div>
}
