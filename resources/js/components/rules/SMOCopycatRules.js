import {Rules} from "../Rules";
import {Ruleset} from "./helpers/Ruleset";
import {RuleList} from "./helpers/RuleList";

export const SMOCopycatRules = () => {
   return <Ruleset>
       This is a carbon-copy of a Super Mario Odyssey Task, translated for use in SM64. <br/>
        Your goal, is to do the following things <b>IN ANY ORDER:</b> <br/><br/>
       <RuleList>
           <div>Spawn anywhere, on any map.</div>
           <div>Collect 20 <b>YELLOW COINS</b></div>
           <div>Kill any enemy</div>
       </RuleList>
       <br />
       Just to go over a few more examples and stipulations:<br/><br/>
       <RuleList>
           <div>A red coin doesn't count as yellow or vice-versa; (yes, someone actually tried to make this argument)</div>
           <div>An enemy is killed when the misc timer stops, or on the first frame where the enemy model is gone.</div>
           <div>A bully, snowman, and eyeball will all be considered killed <b>on the frame it starts dying</b>. The Misc timer doesn't count these deaths</div>
       </RuleList>
   </Ruleset>
};
