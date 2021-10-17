import {WdwFloorIsLavaRules} from "./rules/WdwFloorIsLavaRules";

/**
 * The root Rules component. Depending on the slug, this can show any arbitrary rules for your task.
 * @constructor
 */
export const Rules = ({slug}) => {
    console.debug('Finding a rule: ', slug);
    const ruleSet = [
        ['wdw-floor-is-lava', <WdwFloorIsLavaRules />]
    ];

    for (const rule of ruleSet) {
        if (rule[0] === slug) {
            return rule[1];
        } else {
            console.debug('Was not a match: ', rule, rule[0], slug);
        }
    }
};
