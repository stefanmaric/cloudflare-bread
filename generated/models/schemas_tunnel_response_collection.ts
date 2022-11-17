/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { tunnel } from './tunnel';

export type schemas_tunnel_response_collection = (api_response_collection & {
    result?: Array<tunnel>;
});

