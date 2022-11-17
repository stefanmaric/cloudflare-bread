/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_collection } from './api_response_collection';
import type { schemas_operation } from './schemas_operation';

export type bulk_operation_response_collection = (api_response_collection & {
    result?: schemas_operation;
});

