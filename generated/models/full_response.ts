/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address_maps } from './address_maps';
import type { api_response_single } from './api_response_single';
import type { memberships } from './memberships';
import type { schemas_ips } from './schemas_ips';

export type full_response = (api_response_single & {
    result?: (address_maps & {
        ips?: schemas_ips;
        memberships?: memberships;
    });
});

