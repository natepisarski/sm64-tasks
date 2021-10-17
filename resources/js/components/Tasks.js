import React, { useState, useEffect } from 'react';

export const Tasks = ({}) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    });

    const onTaskClick = task => () => alert(task.slug);

    const renderedTasks = tasks.map(task => {
        return <li key={task.slug} className={'text-lg'} onClick={onTaskClick(task)}>{ task.name }</li>
    });

    return <ul>
        { renderedTasks }
    </ul>
};
