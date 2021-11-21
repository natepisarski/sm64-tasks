import {Form, Button, Dropdown} from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

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
            <Form.Label>Image URL</Form.Label>
            <Form.Control value={taskData.image ?? ''} onChange={setData('image')}/>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>Video URL</Form.Label>
            <Form.Control value={taskData.videoUrl ?? ''} onChange={setData('videoUrl')}/>
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
        <div className={'flex flex-row'}>
            <Form.Label>Category</Form.Label>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="stage-dropdown">
                    {taskData?.categoryName ?? 'Category'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {creatorBundle?.categories?.map(category => {
                        return <Dropdown.Item key={category.id} onClick={() => setData('categoryName')(category?.slug, false)} defaultValue={category?.name}>
                            {category?.name}
                        </Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>Start Date (America/New_York time)</Form.Label>
            <Form.Control value={taskData.startedAt ?? ''} onChange={setData('startedAt')}/>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>End Date (America/New_York time)</Form.Label>
            <Form.Control value={taskData.endedAt ?? ''} onChange={setData('endedAt')}/>
        </div>
        <div className={'flex flex-row'}>
            <Form.Label>API Key</Form.Label>
            <Form.Control value={''} onChange={setData('apiKey')}/>
        </div>
    </div>
}
