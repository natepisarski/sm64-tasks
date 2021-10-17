/**
 * Shows one particular task in an overall list of SM64 tasks.
 */
export const TaskCard = ({title, image, description, onCategoryClick, onTaskClick}) => {
    return <div key={title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={image} alt="" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                    <div className="text-purple-500 hover:underline" onClick={onCategoryClick}>
                        {category}
                    </div>
                </p>
                <div onClick={onTaskClick} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{title}</p>
                    <p className="mt-3 text-base text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    </div>
};
