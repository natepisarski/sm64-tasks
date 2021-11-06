import {useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router";
import {TaskCard} from "../../Cards";
import {TaskView} from "./TaskView";
import * as queryString from 'query-string';
import {Filters} from "./Filters";
import {unit} from "../../../utilities";

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
    const {category = null, seasonId = null, stage = null} = queryString.parse(location.search);

    let [tasks, setTasks] = useState([]);
    let [categoryFilter, setCategoryFilter] = useState(category);
    let [seasonFilter, setSeasonFilter] = useState(seasonId);
    let [stageFilter, setStageFilter] = useState(stage);

    useEffect(() => {
        setCategoryFilter(category);
        setSeasonFilter(seasonId);
        setStageFilter(stage)
    }, [location]);

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


    let onTaskClick = unit;

    // This is a builder for the "filterable" logic. You will pass it some data, and it will then allow an item to be filtered.
    const onFilterableObjectClick = (filterSetter, queryStringGenerator, reset = true) => filterableObject => {
        if (!filterableObject) {
            history.push('/tasks'); // Since the filter is gone, we just want to look at all tasks.
            filterSetter(null);
            return null;
        }

        if (reset) {
            onTaskClick(null);
        }
        
        console.debug('About to filter based on ', filterableObject);
        history.push(queryStringGenerator(filterableObject));
        console.debug('Should have made the URL: ', queryStringGenerator(filterableObject));

        filterSetter(filterableObject);
    }

    onTaskClick = onFilterableObjectClick(
        setTaskId,
        task => `/tasks/${task.id}`,
        false
    );
    const onCategoryClick = onFilterableObjectClick(
        setCategoryFilter,
        category => `/tasks?category=${category}`
    );
    const onSeasonClick = onFilterableObjectClick(
        setSeasonFilter,
        season => `/tasks?seasonId=${season}`
    );
    const onStageClick = onFilterableObjectClick(
        stage => setStageFilter((stage?.slug)),
        stage => `/tasks?stage=${stage.slug}`
    )

    // TODO: Can be combined to be more efficient but meh. Readability trumps everything else.
    console.debug('About to filter: ', tasks);
    const filteredTasks = tasks
        .filter(task => !categoryFilter || task.task_category.name == categoryFilter)
        .filter(task => !seasonFilter || task.season_id == seasonId)
        .filter(task => !stageFilter || task.stage.slug == stageFilter)
    ;

    const currentTask = tasks.find(task => task.id == currentTaskId);

    const taskCards = getTaskCards(filteredTasks, onCategoryClick, onTaskClick, onSeasonClick, onStageClick);
    const taskView = getTaskView(currentTask, onCategoryClick, onSeasonClick, onStageClick);

    let currentTaskView = null;
    let currentFilterBar = null;

    if (currentTaskId) {
        currentTaskView = taskView;
    } else {
        currentTaskView = taskCards;
        currentFilterBar = <Filters tuples={[
            ['Category', categoryFilter, () => onCategoryClick(null)],
            ['Season', seasonFilter, () => onSeasonClick(null)],
            ['Stage', stageFilter, () => onStageClick(null)],
        ]}/>
    }

    return <div className={'grid grid-cols-12 gap-4'}>
        <div className={'grid col-span-12'}>
            {currentFilterBar}
        </div>
        {currentTaskView}
    </div>
}

/** Given a set of tasks, generate the birds-eye-view card for them. Will generate a container that takes up variable space on mobile vs desktop. */
const getTaskCards = (tasks, setCategoryFilter, onTaskClick, onSeasonClick, onStageClick) => tasks.map(task => <div
    key={task.id}
    className={'grid col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2'}>
    <TaskCard
        category={task.task_category?.name ?? 'No Category'}
        title={task.name}
        description={task.description ?? 'No Description'}
        image={task.image}
        stage={task.stage}
        onStageClick={() => onStageClick(task.stage)}
        onTaskClick={() => onTaskClick(task)}
        onCategoryClick={() => setCategoryFilter(task.task_category?.name)}
        seasonName={task.season?.name}
        onSeasonClick={() => onSeasonClick(task.season.id)}
        startedAt={task.started_at}
        endedAt={task.ended_at}
    />
</div>);

/** Gets the larger, expanded view of 1 particular task. */
const getTaskView = (task, setCategoryFilter, onSeasonClick, onStageClick) => task ?
    <div className={'grid col-span-12'}>
        <TaskView
            // Comes from task: id, slug, name, started_at, ended_at, season, stage, description (?? 'No Description), category (??NoCat), image,
            key={task.id}
            task={task}
            onSeasonClick={() => onSeasonClick(task.season.id)}
            onStageClick={() => onStageClick(task.stage)}
            onCategoryClick={() => setCategoryFilter(task.task_category.name)}
        />
    </div> : null;
