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
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    let {taskId} = useParams();
    console.debug('Got Param: ', taskId);
    const [currentTaskId, setTaskId] = useState(taskId);
    const currentTask = tasks.find(task => task.id == currentTaskId);
``
    const taskCards = tasks.map(task => {
        // TODO: Real description, real image, rules, real categories
        return <div key={task.id} className={'grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2'}>
            <TaskCard
                category={task.task_category?.name ?? 'No Category'}
                title={task.name}
                description={task.description ?? 'No Description'}
                image={task.image}
                onTaskClick={() => setTaskId(task.id)}
                onCategoryClick={() => alert('Category not working: ' + task.task_category?.id)}/>
        </div>
    });

    const taskView = currentTask ?
        <div className={'grid col-span-12'}>
            <TaskView
                key={currentTask.id}
                slug={currentTask.slug}
                title={currentTask.name}
                description={currentTask.description ?? 'No Description'}
                category={currentTask.taskCategory.name ?? 'No Category'}
                image={currentTask.image}
                onCategoryClick={() => alert('Category filter not working yet ' + currentTask.task_category.id)}/>
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
