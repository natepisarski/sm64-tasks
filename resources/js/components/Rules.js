import {WdwFloorIsLavaRules} from "./rules/WdwFloorIsLavaRules";
import {WfGreenDemonRules} from "./rules/WfGreenDemonRules";
import {SlSlopeMasterRules} from "./rules/SlSlopeMasterRules";

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
