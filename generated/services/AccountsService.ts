/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_account } from '../models/components_schemas_account';
import type { response_collection } from '../models/response_collection';
import type { response_single } from '../models/response_single';
import type { schemas_identifier } from '../models/schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Accounts
     * List all accounts you have ownership or verified access to.
     * @returns response_collection List Accounts response
     * @throws ApiError
     */
    public accountsListAccounts(): CancelablePromise<response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts',
        });
    }

    /**
     * Account Details
     * Get information about a specific account that you are a member of.
     * @returns response_single Account Details response
     * @throws ApiError
     */
    public accountsAccountDetails({
        identifier,
    }: {
        identifier: schemas_identifier,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Account
     * Update an existing account.
     * @returns response_single Update Account response
     * @throws ApiError
     */
    public accountsUpdateAccount({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: components_schemas_account,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
