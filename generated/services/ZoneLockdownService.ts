/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { lockdowns_components_schemas_id } from '../models/lockdowns_components_schemas_id';
import type { zonelockdown_response_collection } from '../models/zonelockdown_response_collection';
import type { zonelockdown_response_single } from '../models/zonelockdown_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneLockdownService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Zone Lockdown rules
     * Fetches Zone Lockdown rules. You can filter the results using several optional parameters.
     * @returns zonelockdown_response_collection List Zone Lockdown rules response
     * @throws ApiError
     */
    public zoneLockdownListZoneLockdownRules({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zonelockdown_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/lockdowns',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create a Zone Lockdown rule
     * Creates a new Zone Lockdown rule.
     * @returns zonelockdown_response_single Create a Zone Lockdown rule response
     * @throws ApiError
     */
    public zoneLockdownCreateAZoneLockdownRule({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zonelockdown_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/firewall/lockdowns',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Zone Lockdown rule
     * Deletes an existing Zone Lockdown rule.
     * @returns any Delete a Zone Lockdown rule response
     * @throws ApiError
     */
    public zoneLockdownDeleteAZoneLockdownRule({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: lockdowns_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<{
        result?: any;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/firewall/lockdowns/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a Zone Lockdown rule
     * Fetches the details of a Zone Lockdown rule.
     * @returns zonelockdown_response_single Get a Zone Lockdown rule response
     * @throws ApiError
     */
    public zoneLockdownGetAZoneLockdownRule({
        id,
        zoneIdentifier,
    }: {
        id: lockdowns_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<zonelockdown_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/lockdowns/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update a Zone Lockdown rule
     * Updates an existing Zone Lockdown rule.
     * @returns zonelockdown_response_single Update a Zone Lockdown rule response
     * @throws ApiError
     */
    public zoneLockdownUpdateAZoneLockdownRule({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: lockdowns_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zonelockdown_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/firewall/lockdowns/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
