/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { failed_login_response } from '../models/failed_login_response';
import type { users_components_schemas_id } from '../models/users_components_schemas_id';
import type { users_components_schemas_identifier } from '../models/users_components_schemas_identifier';
import type { users_components_schemas_response_collection } from '../models/users_components_schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustUsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get users
     * Gets a list of users for an account.
     * @returns users_components_schemas_response_collection Get users response
     * @throws ApiError
     */
    public zeroTrustUsersGetUsers({
        identifier,
    }: {
        identifier: users_components_schemas_identifier,
    }): CancelablePromise<users_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/users',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Get failed logins
     * Get all failed login attempts for a single user.
     * @returns failed_login_response Get failed logins response
     * @throws ApiError
     */
    public zeroTrustUsersGetFailedLogins({
        id,
        identifier,
    }: {
        id: users_components_schemas_id,
        identifier: users_components_schemas_identifier,
    }): CancelablePromise<failed_login_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/users/{id}/failed_logins',
            path: {
                'id': id,
                'identifier': identifier,
            },
        });
    }

}
