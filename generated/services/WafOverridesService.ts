/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { override_response_collection } from '../models/override_response_collection';
import type { override_response_single } from '../models/override_response_single';
import type { overrides_components_schemas_id } from '../models/overrides_components_schemas_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WafOverridesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List WAF overrides
     * Fetches the URI-based WAF overrides in a zone.
     * @returns override_response_collection List WAF overrides response
     * @throws ApiError
     */
    public wafOverridesListWafOverrides({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<override_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/waf/overrides',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create a WAF override
     * Creates a URI-based WAF override for a zone.
     * @returns override_response_single Create a WAF override response
     * @throws ApiError
     */
    public wafOverridesCreateAWafOverride({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<override_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/firewall/waf/overrides',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a WAF override
     * Deletes an existing URI-based WAF override.
     * @returns any Delete a WAF override response
     * @throws ApiError
     */
    public wafOverridesDeleteAWafOverride({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: overrides_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<{
        result?: any;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/firewall/waf/overrides/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a WAF override
     * Fetches the details of a URI-based WAF override.
     * @returns override_response_single Get a WAF override response
     * @throws ApiError
     */
    public wafOverridesGetAWafOverride({
        id,
        zoneIdentifier,
    }: {
        id: overrides_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<override_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/waf/overrides/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update WAF override
     * Updates an existing URI-based WAF override.
     * @returns override_response_single Update WAF override response
     * @throws ApiError
     */
    public wafOverridesUpdateWafOverride({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: overrides_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<override_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/firewall/waf/overrides/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
