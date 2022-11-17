/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { virtual_network } from './virtual_network';

export type vnet_response_collection = (api_response_collection & {
    result?: Array<virtual_network>;
});

