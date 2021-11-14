/**
 * Presents a page that lets you create Tasks in the database. This is meant to give whoever's running the task
 * an easy way to kick-start tasks. Once created, Tasks can only be manually editing in the database. But this will
 * help you set up associations between datapoints: categories, stages, players, results, etc.
 * @constructor
 */
import {useEffect, useState} from "react";

export const TaskCreator = ({}) => {
    const [creatorBundle, setCreatorBundle] = useState({});

    useEffect(() => {
        fetch('/api/creator-bundle')
            .then(r => r.json())
            .then(data => setCreatorBundle(data));
    }, []);

    console.debug('Creator Bundle: ', creatorBundle);
    return <div>
        <p className={'text-gray-700'}>
            The Task Creator is an administrative tool that makes creating tasks easier. If you fill in the form
            below,<br/>
            you will create a Task into the 'tasks' table of the database. This will have all of its timestamps,
            relationships,
            etc. all hooked up. Then you can edit the more minor details (image URL) by hand.
        </p>
        <br/>
    </div>
};
