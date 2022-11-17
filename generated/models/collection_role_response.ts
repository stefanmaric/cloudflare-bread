/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { schemas_role } from './schemas_role';

export type collection_role_response = (api_response_collection & {
    result?: Array<schemas_role>;
});

