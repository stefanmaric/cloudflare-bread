/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { custom_pages_components_schemas_identifier } from '../models/custom_pages_components_schemas_identifier';
import type { custom_pages_response_collection } from '../models/custom_pages_response_collection';
import type { custom_pages_response_single } from '../models/custom_pages_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomPagesForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List custom pages
     * Fetches all the custom pages at the zone level.
     * @returns custom_pages_response_collection List custom pages response
     * @throws ApiError
     */
    public customPagesForAZoneListCustomPages({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<custom_pages_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_pages',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Get a custom page
     * Fetches the details of a custom page.
     * @returns custom_pages_response_single Get a custom page response
     * @throws ApiError
     */
    public customPagesForAZoneGetACustomPage({
        identifier,
        zoneIdentifier,
    }: {
        identifier: custom_pages_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<custom_pages_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_pages/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update a custom page
     * Updates the configuration of an existing custom page.
     * @returns custom_pages_response_single Update a custom page response
     * @throws ApiError
     */
    public customPagesForAZoneUpdateACustomPage({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: custom_pages_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<custom_pages_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/custom_pages/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
