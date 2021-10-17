/**
 * This is the component that shows you 1 particular task.
 */
import {Rules} from "./Rules";

// TODO: Should probably refactor to take a Task object
export const TaskView = ({title, image, description, category, slug, onCategoryClick}) => {
    return <div>
        <div className={'text-2xl font-semibold'}>{title}</div>
        <div className={'text-purple-500 text-sm font-medium hover:underline mb-4'} onClick={onCategoryClick}>{category}</div>
        <p className={'text-gray-500 text-base mb-5'}>{description}</p>
        <div className={'flex flex-row w-full justify-center mb-5'}>
            <img src={image} />
        </div>
        <div className={'text-2xl font-semibold'}>Rules</div>
        <Rules slug={slug} />
    </div>
};
