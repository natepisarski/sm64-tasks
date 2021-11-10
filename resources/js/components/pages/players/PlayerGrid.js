/**
 * The PlayerGrid is a component that shows the players in a series
 * @constructor
 */
import {PlayerBubble} from "./PlayerBubble";

export const PlayerGrid = ({players, onPlayerClick}) => {
    return <ul role="list"
               className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
        {players.map(player => <PlayerBubble key={player.id} player={player} onClick={onPlayerClick(player)}/>)}
    </ul>
};
