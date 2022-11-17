/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { access_requests_components_schemas_identifier } from '../models/access_requests_components_schemas_identifier';
import type { access_requests_components_schemas_response_collection } from '../models/access_requests_components_schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessAuthenticationLogsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Access authentication logs
     * Gets a list of Access authentication audit logs for an account.
     * @returns access_requests_components_schemas_response_collection Get Access authentication logs response
     * @throws ApiError
     */
    public accessAuthenticationLogsGetAccessAuthenticationLogs({
        identifier,
    }: {
        identifier: access_requests_components_schemas_identifier,
    }): CancelablePromise<access_requests_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/logs/access_requests',
            path: {
                'identifier': identifier,
            },
        });
    }

}
