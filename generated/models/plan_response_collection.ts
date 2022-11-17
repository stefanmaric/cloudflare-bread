/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { schemas_rate_plan } from './schemas_rate_plan';

export type plan_response_collection = (api_response_collection & {
    result?: Array<schemas_rate_plan>;
});

