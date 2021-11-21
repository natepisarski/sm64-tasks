import {Form, Button, Dropdown} from 'react-bootstrap';

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

    const setData = dataName => (value, isSyntheticEvent = true) => {
        console.debug('New Value: ', value);
        if (isSyntheticEvent) {
            setTaskData({...taskData, ...{[dataName]: value.target.value}});
        } else {
            setTaskData({...taskData, ...{[dataName]: value}});
        }
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
            <Form.Label>Task Slug</Form.Label>
            <Form.Control value={taskData.slug ?? ''} onChange={setData('slug')}/>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>Task Description</Form.Label>
            <Form.Control value={taskData.description ?? ''} onChange={setData('description')}/>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>Stage</Form.Label>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="stage-dropdown">
                    {taskData?.stageSlug ?? 'Stage'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {creatorBundle?.stages?.map(stage => {
                        return <Dropdown.Item key={stage.id} onClick={() => setData('stageSlug')(stage.slug, false)} defaultValue={stage.slug}>
                            {stage.name}
                        </Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>Task Description</Form.Label>
            <Form.Control value={taskData.image ?? ''} onChange={setData('image')}/>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>Season</Form.Label>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="stage-dropdown">
                    {taskData?.seasonName ?? 'Season'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {creatorBundle?.seasons?.map(season => {
                        return <Dropdown.Item key={season.id} onClick={() => setData('seasonName')(season?.name, false)} defaultValue={season?.name}>
                            {season?.name}
                        </Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
}
