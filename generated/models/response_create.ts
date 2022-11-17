/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { value } from './value';

export type response_create = (api_response_single & {
    result?: (Record<string, any> & {
        value?: value;
    });
});

