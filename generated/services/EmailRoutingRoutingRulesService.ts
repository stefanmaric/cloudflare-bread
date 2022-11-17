/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { catch_all_rule_response_single } from '../models/catch_all_rule_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { create_rule_properties } from '../models/create_rule_properties';
import type { rule_identifier } from '../models/rule_identifier';
import type { rule_response_single } from '../models/rule_response_single';
import type { rules_response_collection } from '../models/rules_response_collection';
import type { update_catch_all_rule_properties } from '../models/update_catch_all_rule_properties';
import type { update_rule_properties } from '../models/update_rule_properties';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmailRoutingRoutingRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List routing rules
     * Lists existing routing rules.
     * @returns rules_response_collection List routing rules response
     * @throws ApiError
     */
    public emailRoutingRoutingRulesListRoutingRules({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<rules_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/email/routing/rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create routing rule
     * Rules consist of a set of criteria for matching emails (such as an email being sent to a specific custom email address) plus a set of actions to take on the email (like forwarding it to a specific destination address).
     * @returns rule_response_single Create routing rule response
     * @throws ApiError
     */
    public emailRoutingRoutingRulesCreateRoutingRule({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: create_rule_properties,
    }): CancelablePromise<rule_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/email/routing/rules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get catch-all rule
     * Get information on the default catch-all routing rule.
     * @returns catch_all_rule_response_single Get catch-all rule response
     * @throws ApiError
     */
    public emailRoutingRoutingRulesGetCatchAllRule({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<catch_all_rule_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/email/routing/rules/catch_all',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update catch-all rule
     * Enable or disable catch-all routing rule, or change action to forward to specific destination address.
     * @returns catch_all_rule_response_single Update catch-all rule response
     * @throws ApiError
     */
    public emailRoutingRoutingRulesUpdateCatchAllRule({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: update_catch_all_rule_properties,
    }): CancelablePromise<catch_all_rule_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/email/routing/rules/catch_all',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete routing rule
     * Delete a specific routing rule.
     * @returns rule_response_single Delete routing rule response
     * @throws ApiError
     */
    public emailRoutingRoutingRulesDeleteRoutingRule({
        ruleIdentifier,
        zoneIdentifier,
        requestBody,
    }: {
        ruleIdentifier: rule_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/email/routing/rules/{rule_identifier}',
            path: {
                'rule_identifier': ruleIdentifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get routing rule
     * Get information for a specific routing rule already created.
     * @returns rule_response_single Get routing rule response
     * @throws ApiError
     */
    public emailRoutingRoutingRulesGetRoutingRule({
        ruleIdentifier,
        zoneIdentifier,
    }: {
        ruleIdentifier: rule_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<rule_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/email/routing/rules/{rule_identifier}',
            path: {
                'rule_identifier': ruleIdentifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update routing rule
     * Update actions and matches, or enable/disable specific routing rules.
     * @returns rule_response_single Update routing rule response
     * @throws ApiError
     */
    public emailRoutingRoutingRulesUpdateRoutingRule({
        ruleIdentifier,
        zoneIdentifier,
        requestBody,
    }: {
        ruleIdentifier: rule_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: update_rule_properties,
    }): CancelablePromise<rule_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/email/routing/rules/{rule_identifier}',
            path: {
                'rule_identifier': ruleIdentifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
