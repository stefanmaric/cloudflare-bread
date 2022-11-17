/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';

export type single_member_response = (api_response_single & {
    result?: Record<string, any>;
});

