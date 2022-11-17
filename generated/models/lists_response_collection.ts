/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { list } from './list';

export type lists_response_collection = (api_response_collection & {
    result?: Array<(list & Record<string, any>)>;
});

