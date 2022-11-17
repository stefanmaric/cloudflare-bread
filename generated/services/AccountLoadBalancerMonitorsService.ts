/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { monitor_components_schemas_id_response } from '../models/monitor_components_schemas_id_response';
import type { monitor_components_schemas_identifier } from '../models/monitor_components_schemas_identifier';
import type { monitor_components_schemas_response_collection_2 } from '../models/monitor_components_schemas_response_collection_2';
import type { monitor_components_schemas_single_response_2 } from '../models/monitor_components_schemas_single_response_2';
import type { preview_response } from '../models/preview_response';
import type { preview_result_response } from '../models/preview_result_response';
import type { references_response } from '../models/references_response';
import type { schemas_preview_id } from '../models/schemas_preview_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountLoadBalancerMonitorsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Monitors
     * List configured monitors for an account.
     * @returns monitor_components_schemas_response_collection_2 List Monitors response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsListMonitors({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<monitor_components_schemas_response_collection_2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/monitors',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Monitor
     * Create a configured monitor.
     * @returns monitor_components_schemas_single_response_2 Create Monitor response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsCreateMonitor({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/load_balancers/monitors',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Monitor
     * Delete a configured monitor.
     * @returns monitor_components_schemas_id_response Delete Monitor response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsDeleteMonitor({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Monitor Details
     * List a single configured monitor for an account.
     * @returns monitor_components_schemas_single_response_2 Monitor Details response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsMonitorDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: monitor_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<monitor_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Patch Monitor
     * Apply changes to an existing monitor, overwriting the supplied properties.
     * @returns monitor_components_schemas_single_response_2 Patch Monitor response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsPatchMonitor({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Monitor
     * Modify a configured monitor.
     * @returns monitor_components_schemas_single_response_2 Update Monitor response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsUpdateMonitor({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Preview Monitor
     * Preview pools using the specified monitor with provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
     * @returns preview_response Preview Monitor response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsPreviewMonitor({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<preview_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/load_balancers/monitors/{identifier}/preview',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Monitor References
     * Get the list of resources that reference the provided monitor.
     * @returns references_response List Monitor References response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsListMonitorReferences({
        identifier,
        accountIdentifier,
    }: {
        identifier: monitor_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<references_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/monitors/{identifier}/references',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Preview Result
     * Get the result of a previous preview operation using the provided preview_id.
     * @returns preview_result_response Preview Result response
     * @throws ApiError
     */
    public accountLoadBalancerMonitorsPreviewResult({
        previewId,
        accountIdentifier,
    }: {
        previewId: schemas_preview_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<preview_result_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/preview/{preview_id}',
            path: {
                'preview_id': previewId,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
