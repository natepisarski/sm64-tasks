export const SiteNavigationBox = ({ title, icon, description, color, onclick }) => {
    return <li key={title} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 md:max-w-xs flex shadow-sm rounded-md cursor-pointer max-h-12" onClick={onclick}>
        <div
            className={`flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md ${color}`}
        >
            {icon}
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
                <div className="text-gray-900 font-medium hover:text-gray-600">
                    {title}
                </div>
                <p className={'text-gray-500'}>{description}</p>
            </div>
        </div>
    </li>
};
