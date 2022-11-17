/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { rule_collection_response } from '../models/rule_collection_response';
import type { rule_components_schemas_identifier } from '../models/rule_components_schemas_identifier';
import type { rule_single_id_response } from '../models/rule_single_id_response';
import type { rule_single_response } from '../models/rule_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpAccessRulesForAUserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List IP Access rules
     * Fetches IP Access rules of the user. You can filter the results using several optional parameters.
     * @returns rule_collection_response List IP Access rules response
     * @throws ApiError
     */
    public ipAccessRulesForAUserListIpAccessRules(): CancelablePromise<rule_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/firewall/access_rules/rules',
        });
    }

    /**
     * Create an IP Access rule
     * Creates a new IP Access rule for all zones owned by the current user.
     *
     * Note: To create an IP Access rule that applies to a specific zone, refer to the [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
     * @returns rule_single_response Create an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAUserCreateAnIpAccessRule({
        requestBody,
    }: {
        requestBody: any,
    }): CancelablePromise<rule_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/firewall/access_rules/rules',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an IP Access rule
     * Deletes an IP Access rule at the user level.
     *
     * Note: Deleting a user-level rule will affect all zones owned by the user.
     * @returns rule_single_id_response Delete an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAUserDeleteAnIpAccessRule({
        identifier,
        requestBody,
    }: {
        identifier: rule_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_single_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/firewall/access_rules/rules/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update an IP Access rule
     * Updates an IP Access rule defined at the user level. You can only update the rule action (`mode` parameter) and notes.
     * @returns rule_single_response Update an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAUserUpdateAnIpAccessRule({
        identifier,
        requestBody,
    }: {
        identifier: rule_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rule_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/firewall/access_rules/rules/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
