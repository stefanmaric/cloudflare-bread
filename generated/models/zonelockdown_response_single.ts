/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { zonelockdown } from './zonelockdown';

export type zonelockdown_response_single = (api_response_single & {
    result: zonelockdown;
});

