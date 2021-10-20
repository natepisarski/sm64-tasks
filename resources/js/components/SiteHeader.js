import {SiteNavigationBox} from "./SiteNavigationBox";
import {useHistory, useLocation} from "react-router";

export const SiteHeader = ({}) => {
    let location = useLocation();
    const history = useHistory();
    const goTo = url => () => {
        console.debug('Trying to go to: ', url);
        history.push(`${url}`);
    };
    return <>
        <div className="relative bg-indigo-800 mb-6">
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover"
                     src="https://myemulator.online/wp-content/uploads/2017/11/super-mario-64.jpg"
                     alt=""/>
                <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true"/>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-red-300 sm:text-5xl lg:text-6xl">SM64
                    Tasks</h1>
                <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                    SM64 Tasks are small esoteric challenges that test your speedrunning mettle. You'll create routes,
                    explore obscure parts of stages, optimize movement, and more.
                </p>
            </div>
        </div>
        <div className={'w-full flex flex-row justify-between'}>
            <SiteNavigationBox title={'Tasks'} color={'bg-blue-400'} icon={'TASK'} description={'View tasks, seasons, and rules.'} onclick={goTo('/tasks')} />
            <SiteNavigationBox title={'Leaderboard'} color={'bg-gray-400'} icon={'LB'} description={'Size up the competition'} onclick={goTo('/leaderboard')} />
            <SiteNavigationBox title={'Community'} color={'bg-yellow-400'} icon={'CM'} description={`See who's competing, and their history.`} onclick={goTo('/players')} />
            <SiteNavigationBox title={'Learn'} color={'bg-purple-400'} icon={'LN'} description={'FAQ, Learn More, etc.'} onclick={goTo('/learn')} />
            <SiteNavigationBox title={'Special'} color={'bg-gray-500'} icon={'SP'} description={'Used for special events.'} onclick={goTo('/special')} disabled={true} />
        </div>
    </>
};
