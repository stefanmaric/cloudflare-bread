/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { rate_limits } from './rate_limits';

export type ratelimit_response_collection = (api_response_collection & {
    result?: Array<rate_limits>;
});

