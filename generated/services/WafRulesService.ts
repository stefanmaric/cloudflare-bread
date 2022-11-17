/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { package_components_schemas_identifier } from '../models/package_components_schemas_identifier';
import type { rule_components_schemas_identifier_2 } from '../models/rule_components_schemas_identifier_2';
import type { rule_response_collection } from '../models/rule_response_collection';
import type { rule_response_single } from '../models/rule_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WafRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List WAF rules
     * Fetches WAF rules in a WAF package.
     * @returns rule_response_collection List WAF rules response
     * @throws ApiError
     */
    public wafRulesListWafRules({
        packageId,
        zoneId,
    }: {
        packageId: package_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<rule_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/firewall/waf/packages/{package_id}/rules',
            path: {
                'package_id': packageId,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Get a WAF rule
     * Fetches the details of a WAF rule in a WAF package.
     * @returns rule_response_single Get a WAF rule response
     * @throws ApiError
     */
    public wafRulesGetAWafRule({
        identifier,
        packageId,
        zoneId,
    }: {
        identifier: rule_components_schemas_identifier_2,
        packageId: package_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<rule_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{identifier}',
            path: {
                'identifier': identifier,
                'package_id': packageId,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update a WAF rule
     * Updates a WAF rule. You can only update the mode/action of the rule.
     * @returns any Update a WAF rule response
     * @throws ApiError
     */
    public wafRulesUpdateAWafRule({
        identifier,
        packageId,
        zoneId,
        requestBody,
    }: {
        identifier: rule_components_schemas_identifier_2,
        packageId: package_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{identifier}',
            path: {
                'identifier': identifier,
                'package_id': packageId,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
