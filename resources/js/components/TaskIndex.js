import {useState} from "react";
import {useParams} from "react-router";

export const TaskIndex = ({}) => {
    let { taskId } = useParams();
    const [currentTaskId, setTaskId] = useState(taskId);
    console.debug('This is the task ID: ', taskId, currentTaskId);

    return <div>
        <div className={"bg-blue-500"}>Task Index</div>
        { currentTaskId == 1 ? 'Viewing Task 1' : 'Viewing no task'}
    </div>
}
