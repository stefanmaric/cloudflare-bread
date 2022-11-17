/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single_id } from '../models/api_response_single_id';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { filter_no_id } from '../models/filter_no_id';
import type { filter_response_collection } from '../models/filter_response_collection';
import type { filter_response_single } from '../models/filter_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerFiltersDeprecatedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Filters
     * @returns filter_response_collection List Filters response
     * @throws ApiError
     */
    public workerFiltersDeprecatedListFilters({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<filter_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/workers/filters',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * @deprecated
     * Create Filter
     * @returns api_response_single_id Create Filter response
     * @throws ApiError
     */
    public workerFiltersDeprecatedCreateFilter({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: filter_no_id,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_id}/workers/filters',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Delete Filter
     * @returns api_response_single_id Delete Filter response
     * @throws ApiError
     */
    public workerFiltersDeprecatedDeleteFilter({
        filterId,
        zoneId,
        requestBody,
    }: {
        filterId: common_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_id}/workers/filters/{filter_id}',
            path: {
                'filter_id': filterId,
                'zone_id': zoneId,
            },
            body: requestBody,
        });
    }

    /**
     * @deprecated
     * Update Filter
     * @returns filter_response_single Update Filter response
     * @throws ApiError
     */
    public workerFiltersDeprecatedUpdateFilter({
        filterId,
        zoneId,
        requestBody,
    }: {
        filterId: common_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
        requestBody: filter_no_id,
    }): CancelablePromise<filter_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/workers/filters/{filter_id}',
            path: {
                'filter_id': filterId,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
