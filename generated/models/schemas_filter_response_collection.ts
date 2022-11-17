/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { filter } from './filter';

export type schemas_filter_response_collection = (api_response_collection & {
    result?: Array<(filter & Record<string, any>)>;
});

