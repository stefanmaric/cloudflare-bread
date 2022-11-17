/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { item } from './item';

export type item_response_collection = (api_response_collection & {
    result?: item;
});

