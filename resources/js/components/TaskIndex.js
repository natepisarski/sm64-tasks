import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import {TaskCard} from "./TaskCard";
import {TaskView} from "./TaskView";

/** Given a set of tasks, generate the birds-eye-view card for them. Will generate a container that takes up variable space on mobile vs desktop. */
const getTaskCards = (tasks, setCategoryFilter, onTaskClick) => tasks.map(task => <div key={task.id} className={'grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2'}>
    <TaskCard
        category={task.task_category?.name ?? 'No Category'}
        title={task.name}
        description={task.description ?? 'No Description'}
        image={task.image}
        onTaskClick={onTaskClick(task)}
        onCategoryClick={() => setCategoryFilter(task.task_category?.name)}/>
</div>);

/** Gets the larger, expanded view of 1 particular task. */
const getTaskView = (task, setCategoryFilter) => task ?
    <div className={'grid col-span-12'}>
        <TaskView
            key={task.id}
            slug={task.slug}
            title={task.name}
            description={task.description ?? 'No Description'}
            category={task.task_category.name ?? 'No Category'}
            image={task.image}
            onCategoryClick={() => setCategoryFilter(currentTask.task_category.name)}/>
    </div> : null;
/**
 * This page shows a list of all the active tasks. When you select a task, it will show you an overlay of that task.
 * @returns {JSX.Element}
 * @constructor
 */
export const TaskIndex = ({}) => {
    const {taskId} = useParams();
    let history = useHistory();
    let [tasks, setTasks] = useState([]);
    let [categoryFilter, setCategoryFilter] = useState(null);

    useEffect(() => {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const [currentTaskId, setTaskId] = useState(taskId);

    // Changes the current state and the URL to match the new task.
    const onTaskClick = (task) => () => {
        history.push(`/tasks/${task.id}`);
        setTaskId(task.id);
    };

    useEffect(() => {
        setTaskId(taskId);
    }, [taskId]);

    const filteredTasks = categoryFilter ?
        tasks.filter(task => task.task_category?.name === categoryFilter)
        : tasks;

    const currentTask = tasks.find(task => task.id == currentTaskId);

    const taskCards = getTaskCards(filteredTasks, setCategoryFilter, onTaskClick);
    const taskView = getTaskView(currentTask, setCategoryFilter);

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
