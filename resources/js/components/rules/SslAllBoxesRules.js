import {Ruleset} from "./helpers/Ruleset";
import {RuleList} from "./helpers/RuleList";

export const SslAllBoxesRules = () => {
    return <Ruleset>
        You must spawn in <b>SSL</b> and break EVERY. SINGLE. BOX.<br/><br/>

        Timing ends on the first frame of the final box's death animation.<br/><br/>

        Finally, the actual rules:<br/>

        <RuleList>
          <p> Outside boxes only. </p>
          <p> MUST start from level reset, or a save state in the starting position. If you use a save-state in the start it's a 1.5s penalty. </p>
          <p> Boxes broken after death still count. However, it has to actually break by the time the fadeout completes. You can't die and say "That one would have totally broken" </p>
          <p> Obviously there's nothing you can do about the big rolling boxes </p>
        </RuleList>

        Just post in #general with any questions you guys have. Happy box hunting
    </Ruleset>
};
