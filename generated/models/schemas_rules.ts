/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { waf_action } from './waf_action';

/**
 * An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disabling a rule, ensure that you also enable the rule group that this WAF rule belongs to. When creating a new URI-based WAF override, you must provide a `groups` object or a `rules` object.
 */
export type schemas_rules = Record<string, waf_action>;
