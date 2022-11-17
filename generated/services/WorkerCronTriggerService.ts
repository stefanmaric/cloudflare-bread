/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { cron_trigger_response_collection } from '../models/cron_trigger_response_collection';
import type { script_name } from '../models/script_name';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerCronTriggerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Cron Triggers
     * Fetches Cron Triggers for a Worker.
     * @returns cron_trigger_response_collection Get Cron Triggers response
     * @throws ApiError
     */
    public workerCronTriggerGetCronTriggers({
        scriptName,
        accountIdentifier,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<cron_trigger_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}/schedules',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Cron Triggers
     * Updates Cron Triggers for a Worker.
     * @returns cron_trigger_response_collection Update Cron Triggers response
     * @throws ApiError
     */
    public workerCronTriggerUpdateCronTriggers({
        scriptName,
        accountIdentifier,
        requestBody,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<cron_trigger_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}/schedules',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
