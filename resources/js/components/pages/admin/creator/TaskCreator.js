/**
 * Presents a page that lets you create Tasks in the database. This is meant to give whoever's running the task
 * an easy way to kick-start tasks. Once created, Tasks can only be manually editing in the database. But this will
 * help you set up associations between datapoints: categories, stages, players, results, etc.
 * @constructor
 */
import {useEffect, useState} from "react";
import {TaskEdit} from "./TaskEdit";
import {getTaskObjectFromTaskId} from "./creatorBundleUtilities";

export const TaskCreator = ({}) => {
    const [creatorBundle, setCreatorBundle] = useState({});
    const [taskId, setTaskId] = useState({});

    useEffect(() => {
        fetch('/api/creator-bundle')
            .then(r => r.json())
            .then(data => setCreatorBundle(data));
    }, []);

    console.debug('Creator Bundle: ', creatorBundle);

    const taskSelectors = !creatorBundle?.tasks ? null :
        creatorBundle.tasks.map(task =>
            <div key={task.name} className={'text-indigo-500 hover:underline font-semibold flex flex-row cursor-pointer'}
                 onClick={() => setTaskId(task.id)}>
                {task.slug}
            </div>
        );

    const taskObject = getTaskObjectFromTaskId(creatorBundle, taskId);
    const getTaskData = taskObject => {
        return {
            name: taskObject?.name,
            slug: taskObject?.slug,
            descriptions: taskObject?.description,
            stageId: taskObject?.stage_id,
            image: taskObject?.image,
            seasonId: taskObject?.season_id,
            startedAt: taskObject?.started_at,
            endedAt: taskObject?.ended_at,
            categoryId: taskObject?.category_id,
        };
    };
    const [taskData, setTaskData] = useState(getTaskData(taskObject));

    useEffect(() => {
        setTaskData(getTaskData(taskObject));
    }, [taskObject]);

    return <div>
        <p className={'text-gray-700'}>
            The Task Creator is an administrative tool that makes creating and editing tasks easier. If you fill in the
            form
            below,<br/>
            you will create a Task into the 'tasks' table of the database. This will have all of its timestamps,
            relationships,
            etc. all hooked up. Then you can edit the more minor details (image URL) by hand.
        </p>
        <br/>
        <div className={'flex flex-col border-solid border-2 mb-6'}>
            {taskSelectors}
        </div>
        <TaskEdit creatorBundle={creatorBundle} taskData={taskData} setTaskData={setTaskData}/>
    </div>
};
