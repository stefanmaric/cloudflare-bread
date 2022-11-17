/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { tunnel_connection } from './tunnel_connection';

export type tunnel_connections_response = (api_response_collection & {
    result?: Array<tunnel_connection>;
});

