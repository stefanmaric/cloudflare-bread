/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { membership } from './membership';

export type collection_membership_response = (api_response_collection & {
    result?: Array<membership>;
});

