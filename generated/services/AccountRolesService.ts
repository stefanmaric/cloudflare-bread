/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_identifier } from '../models/account_identifier';
import type { response_collection } from '../models/response_collection';
import type { response_single } from '../models/response_single';
import type { schemas_identifier } from '../models/schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountRolesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Roles
     * Get all available roles for an account.
     * @returns response_collection List Roles response
     * @throws ApiError
     */
    public accountRolesListRoles({
        accountIdentifier,
    }: {
        accountIdentifier: account_identifier,
    }): CancelablePromise<response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/roles',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Role Details
     * Get information about a specific role for an account.
     * @returns response_single Role Details response
     * @throws ApiError
     */
    public accountRolesRoleDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: schemas_identifier,
        accountIdentifier: account_identifier,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/roles/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
