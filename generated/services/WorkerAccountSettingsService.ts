/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_settings_response } from '../models/account_settings_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerAccountSettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Fetch Worker Account Settings
     * Fetches Worker Account Settings for an account.
     * @returns account_settings_response Fetch Worker Account Settings response
     * @throws ApiError
     */
    public workerAccountSettingsFetchWorkerAccountSettings({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<account_settings_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/account-settings',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Worker Account Settings
     * Creates Worker Account Settings for an account.
     * @returns account_settings_response Create Worker Account Settings response
     * @throws ApiError
     */
    public workerAccountSettingsCreateWorkerAccountSettings({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<account_settings_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/account-settings',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
