/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { CustomNS } from './CustomNS';

export type acns_response_single = (api_response_single & {
    result?: CustomNS;
});

