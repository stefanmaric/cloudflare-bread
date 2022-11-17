/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { accounts_components_schemas_identifier } from '../models/accounts_components_schemas_identifier';
import type { gateway_account } from '../models/gateway_account';
import type { gateway_account_config } from '../models/gateway_account_config';
import type { gateway_account_device_settings } from '../models/gateway_account_device_settings';
import type { gateway_account_device_settings_response } from '../models/gateway_account_device_settings_response';
import type { gateway_account_logging_settings } from '../models/gateway_account_logging_settings';
import type { gateway_account_logging_settings_response } from '../models/gateway_account_logging_settings_response';
import type { gateway_account_settings } from '../models/gateway_account_settings';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustAccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get device settings for Zero Trust account
     * Describes the current device settings Zero Trust account.
     * @returns gateway_account_device_settings_response Get device settings for Zero Trust account response
     * @throws ApiError
     */
    public zeroTrustAccountsGetDeviceSettingsForZeroTrustAccount({
        identifier,
    }: {
        identifier: accounts_components_schemas_identifier,
    }): CancelablePromise<gateway_account_device_settings_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/devices/settings',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update device settings for the Zero Trust account
     * Updates the current device settings for Zero Trust account.
     * @returns gateway_account_device_settings_response Update device settings for the Zero Trust account response
     * @throws ApiError
     */
    public zeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccount({
        identifier,
        requestBody,
    }: {
        identifier: accounts_components_schemas_identifier,
        requestBody: gateway_account_device_settings,
    }): CancelablePromise<gateway_account_device_settings_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/devices/settings',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Zero Trust account information
     * Get Zero Trust account information.
     * @returns gateway_account Get Zero Trust account information response
     * @throws ApiError
     */
    public zeroTrustAccountsGetZeroTrustAccountInformation({
        identifier,
    }: {
        identifier: accounts_components_schemas_identifier,
    }): CancelablePromise<gateway_account> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Zero Trust account
     * Create Zero Trust account with existing cloudflare account.
     * @returns gateway_account Create Zero Trust account response
     * @throws ApiError
     */
    public zeroTrustAccountsCreateZeroTrustAccount({
        identifier,
        requestBody,
    }: {
        identifier: accounts_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<gateway_account> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/gateway',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Zero Trust account configuration
     * Describes current Zero Trust account configuration.
     * @returns gateway_account_config Get Zero Trust account configuration response
     * @throws ApiError
     */
    public zeroTrustAccountsGetZeroTrustAccountConfiguration({
        identifier,
    }: {
        identifier: accounts_components_schemas_identifier,
    }): CancelablePromise<gateway_account_config> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/configuration',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Zero Trust account configuration
     * Updates the current Zero Trust account configuration.
     * @returns gateway_account_config Update Zero Trust account configuration response
     * @throws ApiError
     */
    public zeroTrustAccountsUpdateZeroTrustAccountConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: accounts_components_schemas_identifier,
        requestBody: gateway_account_settings,
    }): CancelablePromise<gateway_account_config> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/gateway/configuration',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get logging settings for the Zero Trust account
     * Describes the current logging settings for Zero Trust account.
     * @returns gateway_account_logging_settings_response Get logging settings for the Zero Trust account response
     * @throws ApiError
     */
    public zeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccount({
        identifier,
    }: {
        identifier: accounts_components_schemas_identifier,
    }): CancelablePromise<gateway_account_logging_settings_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/logging',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update logging settings for the Zero Trust account
     * Updates the current logging settings for the Zero Trust accounty.
     * @returns gateway_account_logging_settings_response Update logging settings for the Zero Trust account response
     * @throws ApiError
     */
    public zeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccount({
        identifier,
        requestBody,
    }: {
        identifier: accounts_components_schemas_identifier,
        requestBody: gateway_account_logging_settings,
    }): CancelablePromise<gateway_account_logging_settings_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/gateway/logging',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
