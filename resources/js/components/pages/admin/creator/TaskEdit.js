import {Form, Button} from 'react-bootstrap';

/**
 * Component for editing or creating a single Task.
 * We expect Task to have the following information:
 * - slug
 * - name
 * - description
 * - stage
 * - image (should be 'TODO' if not created yet)
 * - season
 * - started_at (filled in in EST, converts to UTC)
 * - ended_at (filled in in EST, converts to ENDED_AT)
 * - category
 */
export const TaskEdit = ({creatorBundle, task = null, taskData, setTaskData}) => {

    const setData = dataName => value => {
        console.debug('New Value: ', value);
        setTaskData({...taskData, ...{[dataName]: value.target.value}});
    };

    console.debug('Editing: ', task);
    console.debug('Task Name: ', task?.name);
    console.debug('Task Data: ', taskData);

    return <div className={'flex flex-col gap-y-4'}>
        <div className={'flex flex-row'}>
            <Form.Label>Task Name</Form.Label>
            <Form.Control value={taskData.name ?? ''} onChange={setData('name')}/>
        </div>
        <div className={'flex flex-row'}>
            {/*<TextBox label={'Slug'} initialValue={task?.slug}/>*/}
        </div>
        <div className={'flex flex-row'}>
            {/*<TextBox label={'Description'} initialValue={task?.description}/>*/}
        </div>
    </div>
}
