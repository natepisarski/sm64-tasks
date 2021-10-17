import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {TaskCard} from "./TaskCard";
import {TaskView} from "./TaskView";

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
    const currentTask = tasks.find(task => task.id === currentTaskId);

    const taskCards = tasks.map(task => {
        // TODO: Real description, real image, rules, real categories
        return <div key={task.id} className={'grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2'}>
            <TaskCard
                category={task.categoryName ?? 'No Category'}
                title={task.name}
                description={task.description ?? 'No Description'}
                image={task.image ?? 'https://i.imgur.com/QaWs5mD.png'}
                onTaskClick={() => setTaskId(task.id)}
                onCategoryClick={() => alert('Category not working')}/>
        </div>
    });

    const taskView = currentTask ?
        <div className={'grid col-span-12'}>
            <TaskView
                key={currentTask.id}
                slug={currentTask.slug}
                title={currentTask.name}
                description={currentTask.description ?? 'No Description'}
                category={currentTask.categoryName ?? 'No Category'}
                image={currentTask.image || 'https://i.imgur.com/QaWs5mD.png'}
                onCategoryClick={() => alert('Category filter not working yet')}/>
        </div> : null;

    let currentTaskView = null;
    if (currentTaskId) {
        currentTaskView = taskView;
    } else {
        currentTaskView = taskCards;
    }

    console.debug('Current Task: ', taskCards, taskView, currentTaskView);
    return <div className={'grid grid-cols-12'}>
        {currentTaskView}
    </div>
}
