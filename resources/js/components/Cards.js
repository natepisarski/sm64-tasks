// TODO: Should probably refactor to take a Task object

export const Card = ({title, hero, onClick, description, preTitle}) => {
    return <div key={title} className={'flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer'} onClick={onClick}>
        <div className={'flex-shrink-0'}>
            {hero}
        </div>
        <div className={'flex-1 bg-white p-6 flex flex-col justify-between'}>
            {preTitle}
            <div onClick={onClick} className="block mt-2">
                <p className="text-xl font-semibold text-gray-900 hover:text-blue-600 hover:underline">{title}</p>
                {description}
            </div>
        </div>
    </div>
};

export const SeasonCard = ({title, onSeasonClick}) => {
    return <Card title={title} onClick={onSeasonClick} hero={<div className={''} style={'width: 256px; height: 256px;'}>{title.toUpperCase()}</div>} />
};

export const TaskCard = ({title, image, description, category, onCategoryClick, onTaskClick}) => {
    const renderedImage = <img width={256} height={256} className="h-48 w-full object-cover" src={image} alt="" />;
    const clickableCategory = <div className="text-sm font-medium text-indigo-600">
        <div className="text-purple-500 hover:underline" onClick={onCategoryClick}>
            {category}
        </div>
    </div>;

    return <Card
        title={title}
        hero={renderedImage}
        onClick={onTaskClick}
        description={description}
        preTitle={clickableCategory} />
};
