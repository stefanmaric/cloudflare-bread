/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { connection } from './connection';
import type { result_info } from './result_info';

export type list_zone_connections_response = (api_response_collection & {
    result?: Array<connection>;
    result_info?: result_info;
});

