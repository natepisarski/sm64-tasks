/** Extremely similar to TaskIndex, except it's for the seasons. You will see a list of all the seasons, and when you
 * click on it, it will taske you to the Tasks view, filtered to that season. */
import {useEffect, useState} from "react";
import {SeasonCard} from "./Cards";
import {useHistory} from "react-router";
import {getRandomItemFromArray, goTo} from "../utilities";

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
    const history = useHistory();
    const goToUrl = goTo(history);

    // Here, when a season is clicked it doesn't take up the whole screen. So actually, there's no state. We don't
    // have to worry about anything but the API call and the rendering.
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        fetch('/api/seasons')
            .then(response => response.json())
            .then(data => setSeasons(data));
    }, []);

    const seasonComponents = seasons.map(season => {
        return <SeasonCard
            key={season.id}
            title={season.name}
            onSeasonClick={goToUrl(`/tasks?seasonId=${season.id}`)}
            color={getRandomCardColor()}
        />
    });

    return <div className={'grid grid-cols-12 gap-4 '}>
        {seasonComponents}
    </div>
}
