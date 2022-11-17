/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { rate_limits_components_schemas_id } from '../models/rate_limits_components_schemas_id';
import type { ratelimit_response_collection } from '../models/ratelimit_response_collection';
import type { ratelimit_response_single } from '../models/ratelimit_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RateLimitsForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List rate limits
     * Fetches the rate limits for a zone.
     * @returns ratelimit_response_collection List rate limits response
     * @throws ApiError
     */
    public rateLimitsForAZoneListRateLimits({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<ratelimit_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/rate_limits',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create a rate limit
     * Creates a new rate limit for a zone. Refer to the object definition for a list of required attributes.
     * @returns ratelimit_response_single Create a rate limit response
     * @throws ApiError
     */
    public rateLimitsForAZoneCreateARateLimit({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ratelimit_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/rate_limits',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a rate limit
     * Deletes an existing rate limit.
     * @returns any Delete a rate limit response
     * @throws ApiError
     */
    public rateLimitsForAZoneDeleteARateLimit({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: rate_limits_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(ratelimit_response_single & {
        result?: any;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/rate_limits/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a rate limit
     * Fetches the details of a rate limit.
     * @returns ratelimit_response_single Get a rate limit response
     * @throws ApiError
     */
    public rateLimitsForAZoneGetARateLimit({
        id,
        zoneIdentifier,
    }: {
        id: rate_limits_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<ratelimit_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/rate_limits/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update a rate limit
     * Updates an existing rate limit.
     * @returns ratelimit_response_single Update a rate limit response
     * @throws ApiError
     */
    public rateLimitsForAZoneUpdateARateLimit({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: rate_limits_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ratelimit_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/rate_limits/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
