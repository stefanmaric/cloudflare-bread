/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_common } from './api_response_common';
import type { ruleset_without_rules } from './ruleset_without_rules';

export type rulesets_response = (api_response_common & {
    /**
     * A list of rulesets. The returned information will not include the rules in each ruleset.
     */
    result?: Array<ruleset_without_rules>;
});

