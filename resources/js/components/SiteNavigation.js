import {useHistory, useLocation, useParams} from "react-router";
import {SiteNavigationBox} from "./SiteNavigationBox";

export const SiteNavigation = ({}) => {
    let location = useLocation();
    const history = useHistory();
    const goTo = url => () => {
        console.debug('Trying to go to: ', url);
        history.push(`${url}`);
    };

    return <div className={'grid grid-cols-12 gap-y-8'}>
        <SiteNavigationBox title={'Tasks'} color={'bg-blue-400'} icon={'TASK'} description={'View tasks, seasons, and rules.'} onclick={goTo('/tasks')} />
        <SiteNavigationBox title={'Leaderboard'} color={'bg-gray-400'} icon={'LB'} description={'Size up the competition'} onclick={goTo('/leaderboard')} />
        <SiteNavigationBox title={'Community'} color={'bg-yellow-400'} icon={'CM'} description={`See who's competing, and their history.`} onclick={goTo('/players')} />
        <SiteNavigationBox title={'Learn'} color={'bg-purple-400'} icon={'LN'} description={'FAQ, Learn More, etc.'} onclick={goTo('/learn')} />
        <SiteNavigationBox title={'Special'} color={'bg-gray-500'} icon={'SP'} description={'Used for special events.'} onclick={goTo('/special')} disabled={true} />
    </div>
};
