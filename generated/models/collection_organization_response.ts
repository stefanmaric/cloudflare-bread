/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { organization } from './organization';

export type collection_organization_response = (api_response_collection & {
    result?: Array<organization>;
});

