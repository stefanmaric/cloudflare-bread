/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { subscription } from './subscription';

export type account_subscription_response_collection = (api_response_collection & {
    result?: Array<subscription>;
});

