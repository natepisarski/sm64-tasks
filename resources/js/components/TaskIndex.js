import {useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router";
import {TaskCard} from "./Cards";
import {TaskView} from "./TaskView";
import * as queryString from 'query-string';

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
            id={task.id}
            slug={task.slug}
            title={task.name}
            description={task.description ?? 'No Description'}
            category={task.task_category.name ?? 'No Category'}
            image={task.image}
            onCategoryClick={() => setCategoryFilter(task.task_category.name)}/>
    </div> : null;
/**
 * This page shows a list of all the active tasks. When you select a task, it will show you an overlay of that task.
 * @returns {JSX.Element}
 * @constructor
 */
export const TaskIndex = ({}) => {
    const {taskId} = useParams();
    const location = useLocation();
    let history = useHistory();

    // These are all the queryString parameters we can have.
    const {category = null, seasonId = null} = queryString.parse(location.search);

    let [tasks, setTasks] = useState([]);
    let [categoryFilter, setCategoryFilter] = useState(category);
    let [seasonFilter, setSeasonFilter] = useState(seasonId);

    const [currentTaskId, setTaskId] = useState(taskId);

    // Load all tasks from the backend.
    useEffect(() => {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    // If the task in the URl changes, so should the active task.
    useEffect(() => {
        setTaskId(taskId);
    }, [taskId]);

    // Focuses a new task, showing more details about that one. This can also clear the active task.
    const onTaskClick = (task) => () => {
        if (!task) {
            history.push('/tasks');
            setTaskId(null);
            return;
        }

        history.push(`/tasks/${task.id}`);
        setTaskId(task.id);
    };

    // Sets a category filter; this will only show certain categories.
    const onCategoryClick = (category) => {
        history.push(`/tasks?category=${category}`);
        setCategoryFilter(category);

        // It wouldn't make any sense to filter categories when looking at 1 task, so we clear the selection.
        onTaskClick(null);
    };

    // TODO: Can be combined to be more efficient but meh. Readability trumps everything else.
    const filteredTasks = tasks
        .filter(task => !categoryFilter || task.task_category.name == categoryFilter)
        .filter(task => !seasonFilter || task.season_id ==  seasonId);

    const currentTask = tasks.find(task => task.id == currentTaskId);

    const taskCards = getTaskCards(filteredTasks, onCategoryClick, onTaskClick);
    const taskView = getTaskView(currentTask, onCategoryClick);

    let currentTaskView = null;
    if (currentTaskId) {
        currentTaskView = taskView;
    } else {
        currentTaskView = taskCards;
    }
    
    return <div className={'grid grid-cols-12'}>
        {currentTaskView}
    </div>
}
