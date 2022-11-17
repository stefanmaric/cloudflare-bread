/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { monitor_components_schemas_id_response } from '../models/monitor_components_schemas_id_response';
import type { monitor_components_schemas_identifier } from '../models/monitor_components_schemas_identifier';
import type { monitor_components_schemas_response_collection } from '../models/monitor_components_schemas_response_collection';
import type { monitor_components_schemas_single_response } from '../models/monitor_components_schemas_single_response';
import type { preview_id } from '../models/preview_id';
import type { preview_response } from '../models/preview_response';
import type { preview_result_response } from '../models/preview_result_response';
import type { references_response } from '../models/references_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoadBalancerMonitorsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Monitors
     * List configured monitors for a user.
     * @returns monitor_components_schemas_response_collection List Monitors response
     * @throws ApiError
     */
    public loadBalancerMonitorsListMonitors(): CancelablePromise<monitor_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/monitors',
        });
    }

    /**
     * Create Monitor
     * Create a configured monitor.
     * @returns monitor_components_schemas_single_response Create Monitor response
     * @throws ApiError
     */
    public loadBalancerMonitorsCreateMonitor({
        requestBody,
    }: {
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/load_balancers/monitors',
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
    public loadBalancerMonitorsDeleteMonitor({
        identifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Monitor Details
     * List a single configured monitor for a user.
     * @returns monitor_components_schemas_single_response Monitor Details response
     * @throws ApiError
     */
    public loadBalancerMonitorsMonitorDetails({
        identifier,
    }: {
        identifier: monitor_components_schemas_identifier,
    }): CancelablePromise<monitor_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Patch Monitor
     * Apply changes to an existing monitor, overwriting the supplied properties.
     * @returns monitor_components_schemas_single_response Patch Monitor response
     * @throws ApiError
     */
    public loadBalancerMonitorsPatchMonitor({
        identifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Monitor
     * Modify a configured monitor.
     * @returns monitor_components_schemas_single_response Update Monitor response
     * @throws ApiError
     */
    public loadBalancerMonitorsUpdateMonitor({
        identifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<monitor_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/load_balancers/monitors/{identifier}',
            path: {
                'identifier': identifier,
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
    public loadBalancerMonitorsPreviewMonitor({
        identifier,
        requestBody,
    }: {
        identifier: monitor_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<preview_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/load_balancers/monitors/{identifier}/preview',
            path: {
                'identifier': identifier,
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
    public loadBalancerMonitorsListMonitorReferences({
        identifier,
    }: {
        identifier: monitor_components_schemas_identifier,
    }): CancelablePromise<references_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/monitors/{identifier}/references',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Preview Result
     * Get the result of a previous preview operation using the provided preview_id.
     * @returns preview_result_response Preview Result response
     * @throws ApiError
     */
    public loadBalancerMonitorsPreviewResult({
        previewId,
    }: {
        previewId: preview_id,
    }): CancelablePromise<preview_result_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/preview/{preview_id}',
            path: {
                'preview_id': previewId,
            },
        });
    }

}
