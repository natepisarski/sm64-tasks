import {WdwFloorIsLavaRules} from "./rules/WdwFloorIsLavaRules";
import {WfGreenDemonRules} from "./rules/WfGreenDemonRules";
import {SlSlopeMasterRules} from "./rules/SlSlopeMasterRules";
import {TtmCalculusRules} from "./rules/TtmCalculusRules";
import {SslAllBoxesRules} from "./rules/SslAllBoxesRules";
import {Ttc100MovingRules} from "./rules/Ttc100MovingRules";

/**
 * The root Rules component. Depending on the slug, this can show any arbitrary rules for your task.
 * @constructor
 */
export const Rules = ({slug}) => {
    console.debug('Finding a rule: ', slug);
    const ruleSet = [
        ['wdw-floor-is-lava', <WdwFloorIsLavaRules />],
        ['wf-green-demon', <WfGreenDemonRules />],
        ['sl-slope-master', <SlSlopeMasterRules />],
        ['ttm-calculus', <TtmCalculusRules />],
        ['ssl-all-boxes', <SslAllBoxesRules />],
        ['ttc-break-all-boxes', <Ttc100MovingRules />],
    ];

    for (const rule of ruleSet) {
        if (rule[0] === slug) {
            return rule[1];
        } else {
            console.debug('Was not a match: ', rule, rule[0], slug);
        }
    }

    // If we get here, it means that no rules are defined for the task.
    return <span className={'text-gray-500 font-semibold'}>There Are No Rules</span>
};
