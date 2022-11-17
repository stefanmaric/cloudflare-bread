/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { config_components_schemas_account_identifier } from '../models/config_components_schemas_account_identifier';
import type { mnm_config } from '../models/mnm_config';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MagicNetworkMonitoringConfigurationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete account configuration
     * Delete an existing network monitoring configuration.
     * @returns mnm_config Delete account configuration response
     * @throws ApiError
     */
    public magicNetworkMonitoringConfigurationDeleteAccountConfiguration({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: config_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_config> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/mnm/config',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * List account configuration
     * Lists default sampling and router IPs for account.
     * @returns mnm_config List account configuration response
     * @throws ApiError
     */
    public magicNetworkMonitoringConfigurationListAccountConfiguration({
        accountIdentifier,
    }: {
        accountIdentifier: config_components_schemas_account_identifier,
    }): CancelablePromise<mnm_config> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/mnm/config',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update account configuration fields
     * Update fields in an existing network monitoring configuration.
     * @returns mnm_config Update account configuration fields response
     * @throws ApiError
     */
    public magicNetworkMonitoringConfigurationUpdateAccountConfigurationFields({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: config_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_config> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/mnm/config',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Create account configuration
     * Create a new network monitoring configuration.
     * @returns mnm_config Create account configuration response
     * @throws ApiError
     */
    public magicNetworkMonitoringConfigurationCreateAccountConfiguration({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: config_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_config> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/mnm/config',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update an entire account configuration
     * Update an existing network monitoring configuration, requires the entire configuration to be updated at once.
     * @returns mnm_config Update an entire account configuration response
     * @throws ApiError
     */
    public magicNetworkMonitoringConfigurationUpdateAnEntireAccountConfiguration({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: config_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<mnm_config> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/mnm/config',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * List rules and account configuration
     * Lists default sampling, router IPs, and rules for account.
     * @returns mnm_config List rules and account configuration response
     * @throws ApiError
     */
    public magicNetworkMonitoringConfigurationListRulesAndAccountConfiguration({
        accountIdentifier,
    }: {
        accountIdentifier: config_components_schemas_account_identifier,
    }): CancelablePromise<mnm_config> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/mnm/config/full',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
