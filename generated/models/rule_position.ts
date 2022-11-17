/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Reorder the position of a rule
 */
export type rule_position = ({
    /**
     *  Places the rule in the exact position specified by the integer number <POSITION_NUMBER>. Position numbers start with 1. Existing rules in the ruleset from the specified position number onward are shifted one position (no rule is overwritten).
     */
    index?: number;
} | {
    /**
     *  Places the rule before rule <RULE_ID>. Use this argument with an empty rule ID value ("") to set the rule as the first rule in the ruleset.
     */
    before?: string;
} | {
    /**
     * Places the rule after rule <RULE_ID>. Use this argument with an empty rule ID value ("") to set the rule as the last rule in the ruleset.
     */
    after?: string;
});

