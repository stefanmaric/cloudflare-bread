/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_common } from '../models/api_response_common';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_id } from '../models/components_schemas_id';
import type { script_name } from '../models/script_name';
import type { tail_response } from '../models/tail_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerTailLogsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Tails
     * Get list of tails currently deployed on a worker.
     * @returns tail_response List Tails response
     * @throws ApiError
     */
    public workerTailLogsListTails({
        scriptName,
        accountIdentifier,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<tail_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}/tails',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Start Tail
     * Starts a tail that receives logs and exception from a Worker.
     * @returns tail_response Start Tail response
     * @throws ApiError
     */
    public workerTailLogsStartTail({
        scriptName,
        accountIdentifier,
        requestBody,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<tail_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}/tails',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Delete Tail
     * Deletes a tail from a Worker.
     * @returns api_response_common Delete Tail response
     * @throws ApiError
     */
    public workerTailLogsDeleteTail({
        id,
        scriptName,
        accountIdentifier,
        requestBody,
    }: {
        id: components_schemas_id,
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_common> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}/tails/{id}',
            path: {
                'id': id,
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
