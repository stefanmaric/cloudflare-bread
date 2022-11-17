/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_response } from '../models/components_schemas_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpListService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get IP Lists
     * @returns components_schemas_response Get IP Lists response
     * @throws ApiError
     */
    public ipListGetIpLists({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<components_schemas_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/ip-list',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
