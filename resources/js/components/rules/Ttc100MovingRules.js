import {Ruleset} from "./helpers/Ruleset";
import {RuleList} from "./helpers/RuleList";

export const Ttc100MovingRules = () => {
    return <Ruleset>
        <p>SM64 speedruns are normally predictable, and can be made consistent. This is true for all but 1 stage: TTC, on random time.</p>
        <RuleList>
            <p>Perform a Level Reset in <b>Random Time.        </b> <code className={'text-gray-500 ml-3'}>C-down + (level reset)</code> in usamune.</p>
            <p>Break all <b>13</b> of the yellow ! Boxes that are around TTC. If you can't find 13, let me know and I'll post their locations.</p>
            <p>Timing ends on <code className={'text-gray-500 ml-2'}>[MISCT BOX]</code>, or on the equivalent frame as testing in frame-advance (if you don't have Usamune) </p>
        </RuleList>
        <hr />
    </Ruleset>
};
