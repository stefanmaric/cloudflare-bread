/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { quota } from './quota';

export type certificate_pack_quota_response = (api_response_single & {
    result?: {
        advanced?: quota;
    };
});

