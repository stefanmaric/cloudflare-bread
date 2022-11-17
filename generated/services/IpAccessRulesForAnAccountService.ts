/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_identifier } from '../models/account_identifier';
import type { api_response_single_id } from '../models/api_response_single_id';
import type { response_collection } from '../models/response_collection';
import type { response_single } from '../models/response_single';
import type { schemas_identifier } from '../models/schemas_identifier';
import type { schemas_rule } from '../models/schemas_rule';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpAccessRulesForAnAccountService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List IP Access rules
     * Fetches IP Access rules of an account. These rules apply to all the zones in the account. You can filter the results using several optional parameters.
     * @returns response_collection List IP Access rules response
     * @throws ApiError
     */
    public ipAccessRulesForAnAccountListIpAccessRules({
        accountIdentifier,
    }: {
        accountIdentifier: account_identifier,
    }): CancelablePromise<response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/firewall/access_rules/rules',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create an IP Access rule
     * Creates a new IP Access rule for an account. The rule will apply to all zones in the account.
     *
     * Note: To create an IP Access rule that applies to a single zone, refer to the [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
     * @returns response_single Create an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAnAccountCreateAnIpAccessRule({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: account_identifier,
        requestBody: any,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/firewall/access_rules/rules',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an IP Access rule
     * Deletes an existing IP Access rule defined at the account level.
     *
     * Note: This operation will affect all zones in the account.
     * @returns api_response_single_id Delete an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAnAccountDeleteAnIpAccessRule({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        accountIdentifier: account_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/firewall/access_rules/rules/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get an IP Access rule
     * Fetches the details of an IP Access rule defined at the account level.
     * @returns response_single Get an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAnAccountGetAnIpAccessRule({
        identifier,
        accountIdentifier,
    }: {
        identifier: schemas_identifier,
        accountIdentifier: account_identifier,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/firewall/access_rules/rules/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update an IP Access rule
     * Updates an IP Access rule defined at the account level.
     *
     * Note: This operation will affect all zones in the account.
     * @returns response_single Update an IP Access rule response
     * @throws ApiError
     */
    public ipAccessRulesForAnAccountUpdateAnIpAccessRule({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        accountIdentifier: account_identifier,
        requestBody: schemas_rule,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/firewall/access_rules/rules/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
