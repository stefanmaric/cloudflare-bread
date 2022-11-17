/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { CustomNS } from './CustomNS';

export type acns_response_collection = (api_response_collection & {
    result?: Array<CustomNS>;
});

