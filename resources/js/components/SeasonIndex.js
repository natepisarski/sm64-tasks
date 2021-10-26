/** Extremely similar to TaskIndex, except it's for the seasons. You will see a list of all the seasons, and when you
 * click on it, it will taske you to the Tasks view, filtered to that season. */
import {useEffect, useState} from "react";
import {SeasonCard} from "./Cards";
import {useHistory, useParams} from "react-router";
import {getRandomItemFromArray, goTo} from "../utilities";
import {Leaderboard} from "./Leaderboard";

const getRandomCardColor = () => {
    // According to the 4-color theorem, we can show a grid of tasks without any 2 colors touching with only 4 colors. Now, we don't
    // know how wide the screen is, so we increase the number of colors to prevent the likelihood of a clash.
    // There's probably some algorithm to figure this out but CBA
    const possibleColors = [
        'bg-red-200',
        'bg-green-200',
        'bg-purple-200',
        'bg-yellow-300',
        'bg-indigo-200',
        'bg-pink-200',
    ];

    return getRandomItemFromArray(possibleColors);
};

/**
 * Root view for the seasons. This will display a list of all the seasons, and potentially a leaderboard for a season
 * if a season is clicked.
 * @returns {JSX.Element}
 * @constructor
 */
export const SeasonIndex = ({}) => {
    const {seasonId} = useParams();

    const history = useHistory();
    const goToUrl = goTo(history);

    console.debug('Got this season ID: ', seasonId);

    // Here, when a season is clicked it doesn't take up the whole screen. So actually, there's no state. We don't
    // have to worry about anything but the API call and the rendering.
    const [seasons, setSeasons] = useState([]);

    const [currentSeasonId, setSeasonId] = useState(seasonId);
    console.debug('Current Season ID: ', currentSeasonId);
    const [currentSeasonLeaderboard, setSeasonLeaderboard] = useState([]);

    // On the initial page load we need to pull a list of all seasons.
    useEffect(() => {
        fetch('/api/seasons')
            .then(response => response.json())
            .then(data => setSeasons(data));
    }, []);

    // When you click on a season, it sets the current season and changes the URL
    const onSeasonClick = (season) => () => {
        console.debug('Triggering season click: ', season);
        setSeasonId(season.id);
        history.push(`/seasons/${season.id}`);
    };

    // When the season changes (from the URL, or from a click), we query the new leaderboard and set the current season.
    useEffect(() => {
        console.debug('Going to try')
        if (currentSeasonId) {
            setSeasonId(currentSeasonId);
            fetch(`/api/seasons/${currentSeasonId}/leaderboard`)
                .then(response => response.json())
                .then(data => setSeasonLeaderboard(data));
        }
    }, [currentSeasonId]);

    // If we have a current season (from click or URL), we have to find the season object that the ID correlates with.
    const currentSeason = seasons.find(season => season.id == currentSeasonId);

    // Represents a list of ALL the season. This is always shown on the bottom.
    const seasonComponents = seasons.map(season => {
        return <SeasonCard
            key={season.id}
            title={season.name}
            onSeasonClick={onSeasonClick(season)}
            color={getRandomCardColor()}
        />
    });

    // Zooms in on one particular season. It will show the leaderboard for that season and let you view the tasks.
    const currentSeasonView = currentSeason ?
        <SeasonView season={currentSeason} leaderboard={currentSeasonLeaderboard} onSeasonClick={goToUrl(`/tasks?seasonId=${currentSeason.id}`)}/>
        : null;

    return <div className={'grid grid-cols-12 gap-4 '}>
        {currentSeasonView}
        {seasonComponents}
    </div>
}

// The view when you're looking at just 1 season
export const SeasonView = ({season, leaderboard, onSeasonClick}) => {
    return <div className={'grid col-span-12 justify-center'}>
        <div className={'text-4xl font-semibold text-center'}>{season.name}</div>
        <Leaderboard leaderboardData={leaderboard} />
        <button type={'button'} onClick={onSeasonClick}>View Tasks</button>
    </div>
};