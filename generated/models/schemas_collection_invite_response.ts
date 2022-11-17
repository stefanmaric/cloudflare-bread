/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { schemas_invite } from './schemas_invite';

export type schemas_collection_invite_response = (api_response_collection & {
    result?: Array<schemas_invite>;
});

