/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { items } from './items';

export type items_list_response_collection = (api_response_collection & {
    result?: items;
    result_info?: {
        cursors?: {
            after?: string;
            before?: string;
        };
    };
});

