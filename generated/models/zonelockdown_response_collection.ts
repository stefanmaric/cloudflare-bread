/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { zonelockdown } from './zonelockdown';

export type zonelockdown_response_collection = (api_response_collection & {
    result: Array<zonelockdown>;
});

