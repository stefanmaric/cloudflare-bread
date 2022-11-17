/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { dns_record } from './dns_record';

export type dns_response_collection = (api_response_collection & {
    result?: Array<dns_record>;
});

