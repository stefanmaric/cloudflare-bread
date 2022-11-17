/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { firewalluablock_response_collection } from '../models/firewalluablock_response_collection';
import type { firewalluablock_response_single } from '../models/firewalluablock_response_single';
import type { ua_rules_components_schemas_id } from '../models/ua_rules_components_schemas_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserAgentBlockingRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List User Agent Blocking rules
     * Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.
     * @returns firewalluablock_response_collection List User Agent Blocking rules response
     * @throws ApiError
     */
    public userAgentBlockingRulesListUserAgentBlockingRules({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<firewalluablock_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/ua_rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create a User Agent Blocking rule
     * Creates a new User Agent Blocking rule in a zone.
     * @returns firewalluablock_response_single Create a User Agent Blocking rule response
     * @throws ApiError
     */
    public userAgentBlockingRulesCreateAUserAgentBlockingRule({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<firewalluablock_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/firewall/ua_rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a User Agent Blocking rule
     * Deletes an existing User Agent Blocking rule.
     * @returns any Delete a User Agent Blocking rule response
     * @throws ApiError
     */
    public userAgentBlockingRulesDeleteAUserAgentBlockingRule({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: ua_rules_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(firewalluablock_response_single & {
        result?: any;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/firewall/ua_rules/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a User Agent Blocking rule
     * Fetches the details of a User Agent Blocking rule.
     * @returns firewalluablock_response_single Get a User Agent Blocking rule response
     * @throws ApiError
     */
    public userAgentBlockingRulesGetAUserAgentBlockingRule({
        id,
        zoneIdentifier,
    }: {
        id: ua_rules_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<firewalluablock_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/ua_rules/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update a User Agent Blocking rule
     * Updates an existing User Agent Blocking rule.
     * @returns firewalluablock_response_single Update a User Agent Blocking rule response
     * @throws ApiError
     */
    public userAgentBlockingRulesUpdateAUserAgentBlockingRule({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: ua_rules_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<firewalluablock_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/firewall/ua_rules/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
