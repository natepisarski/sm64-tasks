import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {TaskCard} from "./TaskCard";

/**
 * This page shows a list of all the active tasks. When you select a task, it will show you an overlay of that task.
 * @returns {JSX.Element}
 * @constructor
 */
export const TaskIndex = ({}) => {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    let {taskId} = useParams();
    const [currentTaskId, setTaskId] = useState(taskId);

    const taskCards = tasks.map(task => {
        // TODO: Real description, real image, rules, real categories
        return <div className={'grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2'}><TaskCard
            key={task.id}
            title={task.name}
            description={task.description ?? 'No Description'}
            image={'https://i.imgur.com/QaWs5mD.png'}
            onTaskClick={() => setTaskId(task.id)}
            onCategoryClick={() => alert('Category not working')}/>
        </div>
    });

    return <div className={'grid grid-cols-12'}>
        {taskCards}
    </div>
}
