/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { argo_tunnel } from './argo_tunnel';

export type tunnel_response_collection = (api_response_collection & {
    result?: Array<argo_tunnel>;
});

