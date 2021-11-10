/** Component that allows the user to filter between seasons, in multiple contexts. */
import {Badge, Filters} from "../tasks/Filters";

/** Displays a series of badges that represent filters. */
export const SeasonFilter = ({seasons, onSeasonClick, selectedSeasonId = null}) => {
    return <div>
        {seasons.map(season => {
            const isSelectedSeason = selectedSeasonId && season.id === selectedSeasonId;
            const bg = isSelectedSeason && 'bg-blue-500';

            return <Badge key={season.id} className={'cursor-pointer'} onClick={() => onSeasonClick(season)} bg={bg} >
                {season.name}
            </Badge>
        })}
    </div>
};
