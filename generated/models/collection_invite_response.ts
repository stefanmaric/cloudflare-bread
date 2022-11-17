/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { invite } from './invite';

export type collection_invite_response = (api_response_collection & {
    result?: Array<invite>;
});

