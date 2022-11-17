/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { filter_rule_response } from './filter_rule_response';

export type filter_rules_response_collection = (api_response_collection & {
    result: Array<(filter_rule_response & Record<string, any>)>;
});

