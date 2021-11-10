/** Component that allows the user to filter between seasons, in multiple contexts. */
export const SeasonFilter = ({seasons, onSeasonClick}) => {
    return <div>
        {seasons.map(season => {
            return <div key={season.id} onClick={() => onSeasonClick(season)}>
                {season.name}
            </div>
        })}
    </div>
};
