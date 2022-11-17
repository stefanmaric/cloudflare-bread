/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { filter } from './filter';

export type filter_delete_response_single = (api_response_single & {
    result: (filter & Record<string, any>);
});

