import {Ruleset} from "./helpers/Ruleset";
import {RuleList} from "./helpers/RuleList";

export const Ttc100MovingRules = () => {
    return <Ruleset>
        <h1 className={'font-bold text-3xl mt-6'}>Preamble</h1> <br />
        <p>TTC 100 is considered to be the hardest star in the game. Traditionally, speedruns do it in 'Time Stopped'.</p> <br />
        <p>This is easy, and also the fastest way. What's interesting is that, casually, you're meant to do it in Time Moving.</p><br />
        <p>Wouldn't it be neat if Speedrunners did too? I think so.</p><br />
        <p>You know what would be even neater? Doing it in <b>RANDOM TIME</b></p><br /><br />
        <h1 className={'font-bold text-4xl'}>The Task & Rules</h1>
        <RuleList>
            <p>Perform a Level Reset in <b>Random Time.        </b> <code className={'text-gray-500 ml-3'}>C-down + (level reset)</code> in usamune.</p>
            <p>Work your way through the stage, collecting 100 coins.</p>
            <p>Time ends when the 100 coin star is grabbed.</p>
            <p>You don't need to get any other star.</p>
        </RuleList>
        <br />
        <p>There are no other restrictions. You can use special triple jump, or whatever else you want.</p>
    </Ruleset>
};
