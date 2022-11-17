/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_operation_id } from './schemas_operation_id';

export type schemas_operation = {
    /**
     * The RFC 3339 timestamp of when the operation was completed.
     */
    readonly completed?: string;
    /**
     * A message describing the error when the status is `failed`.
     */
    readonly error?: string;
    id: schemas_operation_id;
    /**
     * The current status of the asynchronous operation.
     */
    readonly status: 'pending' | 'running' | 'completed' | 'failed';
};

