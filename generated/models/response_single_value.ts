/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { value } from './value';

export type response_single_value = (api_response_single & {
    result?: value;
});

