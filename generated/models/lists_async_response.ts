/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { schemas_operation_id } from './schemas_operation_id';

export type lists_async_response = (api_response_collection & {
    result?: {
        operation_id?: schemas_operation_id;
    };
});

