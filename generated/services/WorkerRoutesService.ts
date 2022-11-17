/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single_id } from '../models/api_response_single_id';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { route_no_id } from '../models/route_no_id';
import type { route_response_collection } from '../models/route_response_collection';
import type { route_response_single } from '../models/route_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerRoutesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Routes
     * @returns route_response_collection List Routes response
     * @throws ApiError
     */
    public workerRoutesListRoutes({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<route_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/workers/routes',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Create Route
     * @returns api_response_single_id Create Route response
     * @throws ApiError
     */
    public workerRoutesCreateRoute({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: route_no_id,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_id}/workers/routes',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Route
     * @returns api_response_single_id Delete Route response
     * @throws ApiError
     */
    public workerRoutesDeleteRoute({
        routeId,
        zoneId,
        requestBody,
    }: {
        routeId: common_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_id}/workers/routes/{route_id}',
            path: {
                'route_id': routeId,
                'zone_id': zoneId,
            },
            body: requestBody,
        });
    }

    /**
     * Get Route
     * @returns route_response_single Get Route response
     * @throws ApiError
     */
    public workerRoutesGetRoute({
        routeId,
        zoneId,
    }: {
        routeId: common_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<route_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/workers/routes/{route_id}',
            path: {
                'route_id': routeId,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update Route
     * @returns route_response_single Update Route response
     * @throws ApiError
     */
    public workerRoutesUpdateRoute({
        routeId,
        zoneId,
        requestBody,
    }: {
        routeId: common_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
        requestBody: route_no_id,
    }): CancelablePromise<route_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/workers/routes/{route_id}',
            path: {
                'route_id': routeId,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
