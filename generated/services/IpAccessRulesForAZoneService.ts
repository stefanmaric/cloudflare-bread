/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { rule_collection_response } from '../models/rule_collection_response';
import type { rule_components_schemas_identifier } from '../models/rule_components_schemas_identifier';
import type { rule_single_id_response } from '../models/rule_single_id_response';
import type { rule_single_response } from '../models/rule_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpAccessRulesForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List IP Access rules
     * Fetches IP Access rules of a zone. You can filter the results using several optional parameters.
     * @returns rule_collection_response List IP Access rules response
     * @throws ApiError
     */
    public ipAccessRulesForAZoneListIpAccessRules({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<rule_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/firewall/access_rules/rules',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Create an IP Access rule
     * Creates a new IP Access rule for a zone.
     *
     * Note: To create an IP Access rule that applies to multiple zones, refer to [IP Access rules for a user](#ip-access-rules-for-a-user) or [IP Access rules for an account](#ip-access-rules-for-an-account) as appropriate.
     * @returns rule_single_response Create an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAZoneCreateAnIpAccessRule({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_id}/firewall/access_rules/rules',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an IP Access rule
     * Deletes an IP Access rule defined at the zone level.
     *
     * Optionally, you can use the `cascade` property to specify that you wish to delete similar rules in other zones managed by the same zone owner.
     * @returns rule_single_id_response Delete an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAZoneDeleteAnIpAccessRule({
        identifier,
        zoneId,
        requestBody,
    }: {
        identifier: rule_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_single_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_id}/firewall/access_rules/rules/{identifier}',
            path: {
                'identifier': identifier,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update an IP Access rule
     * Updates an IP Access rule defined at the zone level. You can only update the rule action (`mode` parameter) and notes.
     * @returns rule_single_response Update an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAZoneUpdateAnIpAccessRule({
        identifier,
        zoneId,
        requestBody,
    }: {
        identifier: rule_components_schemas_identifier,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_id}/firewall/access_rules/rules/{identifier}',
            path: {
                'identifier': identifier,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
