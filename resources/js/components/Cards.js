// TODO: Should probably refactor to take a Task object
import moment from 'moment';

/**
 * A generic Card component. This has some slots for putting whatever you want in, and can show
 * a large hero section; whether that's an image or just a piece of text.
 */
export const Card = ({title, hero, onClick, description, preTitle, color = 'bg-white', border = '', children}) => {
    return <div key={title}
                className={`flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-md ${border}`}
                onClick={onClick}>
        <div className={'flex-shrink-0'}>
            {hero}
        </div>
        <div className={`flex-1 ${color} p-6 flex flex-col justify-between hover:bg-blue-200`}>
            {preTitle}
            {children}
            <div onClick={onClick} className="block mt-2">
                <p className="text-xl font-semibold text-gray-900 hover:text-blue-600 hover:underline">{title}</p>
                {description}
            </div>
        </div>
    </div>
};

/**
 * A Card for seasons. We don't have as much data for seasons as we do for Tasks, so this is much slimmer.
 */
export const SeasonCard = ({title, onSeasonClick, color, border}) => {
    return <Card title={title} onClick={onSeasonClick} color={color} border={border}/>
};

/**
 * A Card for showing the preview for 1 particular Task. This is one of the most important components in all of
 * sm64tasks, so it will likely grow in complexity even more as the site grows.
 */
export const TaskCard = ({
                             title,
                             image,
                             description,
                             category,
                             startedAt,
                             endedAt,
                             seasonName,
                             onCategoryClick,
                             onTaskClick,
                             onSeasonClick
                         }) => {
    const renderedImage = <img width={256} height={256} className="h-48 w-full object-cover" src={image} alt=""/>;

    const clickableCategory = <ClickableLink name={category} onClick={onCategoryClick}/>
    const clickableSeason = <ClickableLink name={seasonName} onClick={onSeasonClick} color={'green'}/>

    const formatDateTime = dateTime => {
        if (!dateTime) {
            return <span className={'text-gray-500'}>None</span>
        }
        return moment(dateTime).format('MMM Do YY');
    };

    // If this task has already ended, we want to give it a slight gray look.
    let color = 'bg-white';
    if (endedAt && moment(endedAt).isBefore(moment())) {
        color = 'bg-gray-200';
    }

    return <Card
        title={title}
        hero={renderedImage}
        onClick={onTaskClick}
        description={description}
        color={color}
        preTitle={clickableCategory}>
        {/* We want to show the dates, and the season. */}
        <div className={'flex flex-col w-full gap-y-2'}>
            <div className={'flex flex-row'}>
                <div className={'flex flex-1'}>
                    {clickableSeason}
                </div>
                <div className={'flex flex-1 text-sm whitespace-nowrap font-light text-gray-700'}>
                    {formatDateTime(startedAt)} - {formatDateTime(endedAt)}
                </div>
            </div>
        </div>
    </Card>
};

export const ClickableLink = ({name, onClick, color = 'purple'}) => <div
    className="text-sm font-medium text-indigo-600">
    <div className={`text-${color}-500 hover:underline`} onClick={evt => {
        evt.stopPropagation();
        onClick();
    }}>
        {name}
    </div>
</div>;
