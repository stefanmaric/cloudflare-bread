/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mnm_rule } from '../models/mnm_rule';
import type { mnm_rule_automatic_advertisement } from '../models/mnm_rule_automatic_advertisement';
import type { mnm_rules } from '../models/mnm_rules';
import type { rules_components_schemas_account_identifier } from '../models/rules_components_schemas_account_identifier';
import type { schemas_rule_identifier } from '../models/schemas_rule_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MagicNetworkMonitoringRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List rules
     * Lists network monitoring rules for account.
     * @returns mnm_rules List rules response
     * @throws ApiError
     */
    public magicNetworkMonitoringRulesListRules({
        accountIdentifier,
    }: {
        accountIdentifier: rules_components_schemas_account_identifier,
    }): CancelablePromise<mnm_rules> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/mnm/rules',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create rules
     * Create network monitoring rules for account.
     * @returns mnm_rules Create rules response
     * @throws ApiError
     */
    public magicNetworkMonitoringRulesCreateRules({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: rules_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_rules> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/mnm/rules',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update rules
     * Update network monitoring rules for account.
     * @returns mnm_rules Update rules response
     * @throws ApiError
     */
    public magicNetworkMonitoringRulesUpdateRules({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: rules_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_rules> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/mnm/rules',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Delete rule
     * Delete a network monitoring rule for account.
     * @returns mnm_rule Delete rule response
     * @throws ApiError
     */
    public magicNetworkMonitoringRulesDeleteRule({
        ruleIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        ruleIdentifier: schemas_rule_identifier,
        accountIdentifier: rules_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_rule> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/mnm/rules/{rule_identifier}',
            path: {
                'rule_identifier': ruleIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get rule
     * List a single network monitoring rule for account.
     * @returns mnm_rule Get rule response
     * @throws ApiError
     */
    public magicNetworkMonitoringRulesGetRule({
        ruleIdentifier,
        accountIdentifier,
    }: {
        ruleIdentifier: schemas_rule_identifier,
        accountIdentifier: rules_components_schemas_account_identifier,
    }): CancelablePromise<mnm_rule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/mnm/rules/{rule_identifier}',
            path: {
                'rule_identifier': ruleIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update rule
     * Update a network monitoring rule for account.
     * @returns mnm_rule Update rule response
     * @throws ApiError
     */
    public magicNetworkMonitoringRulesUpdateRule({
        ruleIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        ruleIdentifier: schemas_rule_identifier,
        accountIdentifier: rules_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_rule> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/mnm/rules/{rule_identifier}',
            path: {
                'rule_identifier': ruleIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update advertisement for rule
     * Update advertisement for rule.
     * @returns mnm_rule_automatic_advertisement Update advertisement for rule response
     * @throws ApiError
     */
    public magicNetworkMonitoringRulesUpdateAdvertisementForRule({
        ruleIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        ruleIdentifier: schemas_rule_identifier,
        accountIdentifier: rules_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_rule_automatic_advertisement> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/mnm/rules/{rule_identifier}/advertisement',
            path: {
                'rule_identifier': ruleIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
