/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { schemas_response_collection } from '../models/schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PermissionGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Permission Groups
     * Find all available permission groups.
     * @returns schemas_response_collection List Permission Groups response
     * @throws ApiError
     */
    public permissionGroupsListPermissionGroups(): CancelablePromise<schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/tokens/permission_groups',
        });
    }

}
