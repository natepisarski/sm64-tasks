import {TextBox} from 'react-form-elements';

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
export const TaskEdit = ({creatorBundle, task = null}) => {
    return <div>
        <TextBox label={'Name'} initialValue={task?.name} />
        <TextBox label={'Slug'} initialValue={task?.slug} />
    </div>
}
