/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';

export type empty_response = (api_response_collection & {
    result?: Array<any>;
});

