/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { group_components_schemas_identifier } from '../models/group_components_schemas_identifier';
import type { package_components_schemas_identifier } from '../models/package_components_schemas_identifier';
import type { rule_group_response_collection } from '../models/rule_group_response_collection';
import type { rule_group_response_single } from '../models/rule_group_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WafRuleGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List WAF rule groups
     * Fetches the WAF rule groups in a WAF package.
     * @returns rule_group_response_collection List WAF rule groups response
     * @throws ApiError
     */
    public wafRuleGroupsListWafRuleGroups({
        packageIdentifier,
        zoneIdentifier,
    }: {
        packageIdentifier: package_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<rule_group_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/waf/packages/{package_identifier}/groups',
            path: {
                'package_identifier': packageIdentifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Get a WAF rule group
     * Fetches the details of a WAF rule group.
     * @returns rule_group_response_single Get a WAF rule group response
     * @throws ApiError
     */
    public wafRuleGroupsGetAWafRuleGroup({
        identifier,
        packageIdentifier,
        zoneIdentifier,
    }: {
        identifier: group_components_schemas_identifier,
        packageIdentifier: package_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<rule_group_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/waf/packages/{package_identifier}/groups/{identifier}',
            path: {
                'identifier': identifier,
                'package_identifier': packageIdentifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update a WAF rule group
     * Updates a WAF rule group. You can update the state (`mode` parameter) of a rule group.
     * @returns rule_group_response_single Update a WAF rule group response
     * @throws ApiError
     */
    public wafRuleGroupsUpdateAWafRuleGroup({
        identifier,
        packageIdentifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: group_components_schemas_identifier,
        packageIdentifier: package_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_group_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/firewall/waf/packages/{package_identifier}/groups/{identifier}',
            path: {
                'identifier': identifier,
                'package_identifier': packageIdentifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
