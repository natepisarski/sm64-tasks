import {useState} from "react";
import {useParams} from "react-router";

export const TaskIndex = ({}) => {
    let { taskId } = useParams();
    const [currentTaskId, setTaskId] = useState(taskId);
    console.debug('This is the task ID: ', taskId, currentTaskId);

    return <div>
        Task Index
        { currentTaskId == 1 ? 'Viewing Task 1' : 'Viewing no task'}
    </div>
}
