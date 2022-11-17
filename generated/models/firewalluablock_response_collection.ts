/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { ua_rules } from './ua_rules';

export type firewalluablock_response_collection = (api_response_collection & {
    result?: Array<ua_rules>;
});

