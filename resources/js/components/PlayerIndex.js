import {useHistory, useParams} from "react-router";
import {goTo} from "../utilities";
import {useEffect, useState} from "react";
import {SeasonCard} from "./Cards";
import {SeasonView} from "./SeasonIndex";

/**
 * This is the component that shows 1 single player, either in the grid or in the focused mode.
 */
export const PlayerBubble = ({player, onClick}) => {
    let bubbleClass = 'space-y-4 cursor-pointer rounded-lg ';

    if (onClick) {
        bubbleClass += 'hover:shadow-lg hover:bg-blue-100';
    }

    return <li key={player.id}>
        <div className={bubbleClass} onClick={onClick}>
            <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                 src={player.avatar}
                 alt={player.name}/>
            <div className="space-y-2">
                <div className="text-xs font-medium lg:text-sm">
                    <h3>{player.name}</h3>
                </div>
            </div>
        </div>
    </li>;
}

/**
 * The PlayerGrid is a component that shows the players in a series
 * @constructor
 */
export const PlayerGrid = ({players, onPlayerClick}) => {
    return <ul role="list"
               className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
        {players.map(player => <PlayerBubble key={player.id} player={player} onClick={onPlayerClick(player)}/>)}
    </ul>
};

/**
 * The view for looking at 1 specific player. This will be their name, avatar, TaskScore, and Task Leaderboard
 * @param player
 * @returns {JSX.Element}
 * @constructor
 */
export const PlayerView = ({player}) => {
    return <div className={'list-none mb-6'}>
        <PlayerBubble player={player}/>
        <div>Leaderboard would go here</div>
    </div>
};

/**
 * Shows a grid of Players at first. These appear as bubbles with the Players' name and Discord avatar.
 *
 * Players can be clicked, which sets the current player in the state and URL (for linking purposes). This will show
 * a special leaderboard like this:
 * |   TASK_NAME (link)    |    SCORE |
 *
 * under their bubble, which is now shown at the top of the page
 * @returns {JSX.Element}
 * @constructor
 */
export const PlayerIndex = () => {
    const {playerId} = useParams();

    const history = useHistory();
    const goToUrl = goTo(history);

    console.debug('Got this Player ID: ', playerId);

    // NOTE: Player
    const [players, setPlayers] = useState([]);
    const [currentPlayerId, setPlayerId] = useState(playerId);

    console.debug('Current Player ID: ', currentPlayerId);

    // Pulls all the players. All the players have their special task_leaderboard variable attached.
    useEffect(() => {
        fetch('/api/players')
            .then(response => response.json())
            .then(data => setPlayers(data));
    }, []);

    // When you click on a player, it sets the current player and changes the URL. This also affects what is shown on
    // the page.
    const onPlayerClick = (player) => () => {
        console.debug('Triggering player click: ', player);
        setPlayerId(player.id);
        history.push(`/players/${player.id}`);
    };

    // This triggers when the player changes in the URL, or from a click. We use this to set the current player
    useEffect(() => {
        console.debug('Active Player Changed!', currentPlayerId)
        // if (currentPlayerId) {
        setPlayerId(currentPlayerId);
        // }
    }, [currentPlayerId]);

    // We only have the ID of the current player. We need the object.
    const currentPlayer = players.find(player => player.id == currentPlayerId);
    console.debug('Current Player with this ID: ', currentPlayer);
    // Zooms in on one particular player. This will show their avatar larger, and a leaderboard for all tasks that they've
    // participated in. In the future this will also show their TaskScore.
    const currentPlayerView = currentPlayer ? <PlayerView player={currentPlayer} /> : null;
    const playerGridView = <PlayerGrid players={players} onPlayerClick={onPlayerClick}/>;

    const gridTitle = currentPlayer ? currentPlayer.name : 'Players';
    const gridSubtitle = currentPlayer ? null :
        <p className="text-xl text-gray-500">See who's participating in the tasks.</p>

    return <div>
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-8 sm:space-y-12">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{gridTitle}</h2>
                    <span className="text-xl text-gray-500">{gridSubtitle}</span>
                </div>
                {currentPlayerView}
                {playerGridView}
            </div>
        </div>
    </div>;
}
