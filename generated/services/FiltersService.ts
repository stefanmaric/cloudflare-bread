/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { filter_delete_response_collection } from '../models/filter_delete_response_collection';
import type { filter_delete_response_single } from '../models/filter_delete_response_single';
import type { filters_components_schemas_id } from '../models/filters_components_schemas_id';
import type { schemas_filter_response_collection } from '../models/schemas_filter_response_collection';
import type { schemas_filter_response_single } from '../models/schemas_filter_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FiltersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete filters
     * Deletes one or more existing filters.
     * @returns filter_delete_response_collection Delete filters response
     * @throws ApiError
     */
    public filtersDeleteFilters({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            id: filters_components_schemas_id;
        },
    }): CancelablePromise<filter_delete_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/filters',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List filters
     * Fetches filters in a zone. You can filter the results using several optional parameters.
     * @returns schemas_filter_response_collection List filters response
     * @throws ApiError
     */
    public filtersListFilters({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_filter_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/filters',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create filters
     * Creates one or more filters.
     * @returns schemas_filter_response_collection Create filters response
     * @throws ApiError
     */
    public filtersCreateFilters({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_filter_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/filters',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update filters
     * Updates one or more existing filters.
     * @returns schemas_filter_response_collection Update filters response
     * @throws ApiError
     */
    public filtersUpdateFilters({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_filter_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/filters',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a filter
     * Deletes an existing filter.
     * @returns filter_delete_response_single Delete a filter response
     * @throws ApiError
     */
    public filtersDeleteAFilter({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: filters_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<filter_delete_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/filters/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a filter
     * Fetches the details of a filter.
     * @returns schemas_filter_response_single Get a filter response
     * @throws ApiError
     */
    public filtersGetAFilter({
        id,
        zoneIdentifier,
    }: {
        id: filters_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_filter_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/filters/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update a filter
     * Updates an existing filter.
     * @returns schemas_filter_response_single Update a filter response
     * @throws ApiError
     */
    public filtersUpdateAFilter({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: filters_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_filter_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/filters/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
