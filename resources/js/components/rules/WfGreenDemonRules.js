import {Ruleset} from "./helpers/Ruleset";
import {RuleList} from "./helpers/RuleList";

export const WfGreenDemonRules = () => {
    return <Ruleset>
        You will use the nonstop code. Then:<br /><br />

        You will start from the flag pole in Whomp's Fortress, with a 1-up spawning.<br/>
        While the 1-up is chasing you, you have to (IN ANY ORDER):<br /><br />

        <RuleList>
            <p>Break Something. Anything. The 1-up enclosure, a box, the plank, a whomp, whatever.</p>
            <p>Collect 50 coins. BLUE COINS ARE BANNED. Red coins count.</p>
            <p>Collect any star. Realistically this will be Wild Blue, but it doesn't have to be if another star is faster.</p>
            <p>Kill all 3 plants.</p>
        </RuleList>

        <br /><br/>
        Finally, collect your 1-up to end the time.<br/><br/>

        THIS IS A SCORE-BASED TASK. Your score is how many of those objectives you complete before the 1-up catches you.<br/><br/>

        If your score ties someone else, your time is used to break the tie.<br/><br/>

        Random considerations:<br/><br/>

        <RuleList>
            <p> A plant is considered 'dead' on the first frame it starts dying. If a plant is still dying when you collect your 1-up, it's fine. </p>
            <p> The warp is banned. </p>
            <p> Blue coins are banned. If you accidentally grab a blue coin from a plant it's fine. You just have to end with 55+, 60+, or 65+ coins. </p>
            <p> A wobbling plank is not a broken plank. </p>
            <p> Any version of WF is fair game. You can have the tower, or the big whomp, or the metal cap box, etc.. </p>
            <p> If you start the level with coins, they don't count. </p>
        </RuleList>
    </Ruleset>
};
