/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { filter_rule_response } from './filter_rule_response';

export type filter_rules_single_response_delete = (api_response_single & {
    result: (filter_rule_response & Record<string, any>);
});

