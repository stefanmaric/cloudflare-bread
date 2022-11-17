/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { locations_components_schemas_empty_response } from '../models/locations_components_schemas_empty_response';
import type { locations_components_schemas_identifier } from '../models/locations_components_schemas_identifier';
import type { locations_components_schemas_response_collection } from '../models/locations_components_schemas_response_collection';
import type { locations_components_schemas_single_response } from '../models/locations_components_schemas_single_response';
import type { locations_components_schemas_uuid } from '../models/locations_components_schemas_uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustGatewayLocationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Zero Trust Gateway Locations
     * List Zero Trust Gateway Locations for an account.
     * @returns locations_components_schemas_response_collection List Zero Trust Gateway Locations response
     * @throws ApiError
     */
    public zeroTrustGatewayLocationsListZeroTrustGatewayLocations({
        identifier,
    }: {
        identifier: locations_components_schemas_identifier,
    }): CancelablePromise<locations_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/locations',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Zero Trust Gateway Location
     * Create a new Zero Trust Gateway Location.
     * @returns locations_components_schemas_single_response Create Zero Trust Gateway Location response
     * @throws ApiError
     */
    public zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation({
        identifier,
        requestBody,
    }: {
        identifier: locations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<locations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/gateway/locations',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Zero Trust Gateway Location
     * Delete a Zero Trust Gateway Location.
     * @returns locations_components_schemas_empty_response Delete Zero Trust Gateway Location response
     * @throws ApiError
     */
    public zeroTrustGatewayLocationsDeleteZeroTrustGatewayLocation({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: locations_components_schemas_uuid,
        identifier: locations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<locations_components_schemas_empty_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/gateway/locations/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Zero Trust Gateway Location Details
     * Fetch a single Zero Trust Gateway Location.
     * @returns locations_components_schemas_single_response Zero Trust Gateway Location Details response
     * @throws ApiError
     */
    public zeroTrustGatewayLocationsZeroTrustGatewayLocationDetails({
        uuid,
        identifier,
    }: {
        uuid: locations_components_schemas_uuid,
        identifier: locations_components_schemas_identifier,
    }): CancelablePromise<locations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/locations/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Zero Trust Gateway Location
     * Update a configured Zero Trust Gateway Location.
     * @returns locations_components_schemas_single_response Update Zero Trust Gateway Location response
     * @throws ApiError
     */
    public zeroTrustGatewayLocationsUpdateZeroTrustGatewayLocation({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: locations_components_schemas_uuid,
        identifier: locations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<locations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/gateway/locations/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
