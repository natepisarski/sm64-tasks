import {Ruleset} from "./helpers/Ruleset";

export const LllAllSmallBulliesRules = () => {
    return <Ruleset>
        <p>The only rule that really needs clarifying here is the bully timing criteria.</p> <br/>
        <p>The only bully it matters for is the final one - since that's what timing will be based on.</p> <br />
        <p>If you trigger the bully's death (i.e it falls into Lava), then it's considered dead. The <b>FINISHING BLOW</b> is when your
        time ends since it's what the Misc Timer tracks ([MISCT ENEMY])</p> <br /><br />
        <p>If there's a scenario where the bully dies, but after some significant delay, that's still how the timing works. For instance if you were
        to knock a bully onto a platform with rising lava, that kills it 5 seconds later.</p> <br/>
        <p>The only thing you can't do is say "that bully totally would have died" without showing its death in the audio or video.</p>
    </Ruleset>
};
