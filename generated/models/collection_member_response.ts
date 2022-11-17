/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { components_schemas_member } from './components_schemas_member';

export type collection_member_response = (api_response_collection & {
    result?: Array<components_schemas_member>;
});

