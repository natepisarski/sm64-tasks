/** Extremely similar to TaskIndex, except it's for the seasons. You will see a list of all the seasons, and when you
 * click on it, it will taske you to the Tasks view, filtered to that season. */
import {useEffect, useState} from "react";
import {SeasonCard} from "./Cards";
import {useHistory} from "react-router";
import {goTo} from "../utilities";

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
            onSeasonClick={goToUrl(`/tasks?seasonId=${season.id}`)} />
    });

    return <div className={'grid grid-cols-12'}>
        {seasonComponents}
    </div>
}
