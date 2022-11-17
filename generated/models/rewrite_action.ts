/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { waf_rewrite_action } from './waf_rewrite_action';

/**
 * Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object.
 */
export type rewrite_action = {
    block?: waf_rewrite_action;
    challenge?: any;
    default?: any;
    disable?: waf_rewrite_action;
    simulate?: any;
};

