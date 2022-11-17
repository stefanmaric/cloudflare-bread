/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { item_id } from './item_id';

export type list_delete_response_collection = (api_response_collection & {
    result?: {
        id?: item_id;
    };
});

