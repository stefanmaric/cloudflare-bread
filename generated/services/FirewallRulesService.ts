/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { delete_filter_if_unused } from '../models/delete_filter_if_unused';
import type { filter_rules_response_collection } from '../models/filter_rules_response_collection';
import type { filter_rules_response_collection_delete } from '../models/filter_rules_response_collection_delete';
import type { filter_rules_single_response } from '../models/filter_rules_single_response';
import type { filter_rules_single_response_delete } from '../models/filter_rules_single_response_delete';
import type { firewall_rules_components_schemas_id } from '../models/firewall_rules_components_schemas_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FirewallRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete firewall rules
     * Deletes existing firewall rules.
     * @returns filter_rules_response_collection_delete Delete firewall rules response
     * @throws ApiError
     */
    public firewallRulesDeleteFirewallRules({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            id: firewall_rules_components_schemas_id;
        },
    }): CancelablePromise<filter_rules_response_collection_delete> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/firewall/rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List firewall rules
     * Fetches firewall rules in a zone. You can filter the results using several optional parameters.
     * @returns filter_rules_response_collection List firewall rules response
     * @throws ApiError
     */
    public firewallRulesListFirewallRules({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<filter_rules_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update priority of firewall rules
     * Updates the priority of existing firewall rules.
     * @returns filter_rules_response_collection Update priority of firewall rules response
     * @throws ApiError
     */
    public firewallRulesUpdatePriorityOfFirewallRules({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<filter_rules_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/firewall/rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create firewall rules
     * Create one or more firewall rules.
     * @returns filter_rules_response_collection Create firewall rules response
     * @throws ApiError
     */
    public firewallRulesCreateFirewallRules({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<filter_rules_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/firewall/rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update firewall rules
     * Updates one or more existing firewall rules.
     * @returns filter_rules_response_collection Update firewall rules response
     * @throws ApiError
     */
    public firewallRulesUpdateFirewallRules({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<filter_rules_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/firewall/rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a firewall rule
     * Deletes an existing firewall rule.
     * @returns filter_rules_single_response_delete Delete a firewall rule response
     * @throws ApiError
     */
    public firewallRulesDeleteAFirewallRule({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: firewall_rules_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            delete_filter_if_unused?: delete_filter_if_unused;
        },
    }): CancelablePromise<filter_rules_single_response_delete> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/firewall/rules/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a firewall rule
     * Fetches the details of a firewall rule.
     * @returns filter_rules_single_response Get a firewall rule response
     * @throws ApiError
     */
    public firewallRulesGetAFirewallRule({
        id,
        zoneIdentifier,
    }: {
        id: firewall_rules_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<filter_rules_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/rules/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update priority of a firewall rule
     * Updates the priority of an existing firewall rule.
     * @returns filter_rules_response_collection Update priority of a firewall rule response
     * @throws ApiError
     */
    public firewallRulesUpdatePriorityOfAFirewallRule({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: firewall_rules_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<filter_rules_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/firewall/rules/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update a firewall rule
     * Updates an existing firewall rule.
     * @returns filter_rules_single_response Update a firewall rule response
     * @throws ApiError
     */
    public firewallRulesUpdateAFirewallRule({
        id,
        zoneIdentifier,
        requestBody,
    }: {
        id: firewall_rules_components_schemas_id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<filter_rules_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/firewall/rules/{id}',
            path: {
                'id': id,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
