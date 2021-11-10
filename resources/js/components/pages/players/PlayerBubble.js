/**
 * This is the component that shows 1 single player, either in the grid or in the focused mode.
 */
export const PlayerBubble = ({player, onClick}) => {
    let bubbleClass = 'space-y-4 cursor-pointer rounded-lg ';

    if (onClick) {
        bubbleClass += 'hover:shadow-lg hover:bg-blue-100';
    }

    const taskLength = player.tasks.length;
    const nameSubtitle = taskLength + (taskLength === 1 ? ' task' : ' tasks');

    return <li key={player.id}>
        <div className={bubbleClass} onClick={onClick}>
            <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                 src={player.avatar}
                 alt={player.name}/>
            <div className="space-y-2">
                <div className="text-xs font-medium lg:text-sm">
                    <h3>{player.name}</h3>
                    <span className={'text-sm text-gray-600'}>{nameSubtitle}</span>
                </div>
            </div>
        </div>
    </li>;
};
