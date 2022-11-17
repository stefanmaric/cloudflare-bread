/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { override } from './override';

export type override_response_collection = (api_response_collection & {
    result: Array<(override & Record<string, any>)>;
});

