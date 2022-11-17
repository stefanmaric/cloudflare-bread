/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { teamnet } from './teamnet';

export type route_response_collection = (api_response_collection & {
    result?: Array<teamnet>;
});

