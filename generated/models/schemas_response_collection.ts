/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';

export type schemas_response_collection = (api_response_collection & {
    result?: Array<Record<string, any>>;
});

