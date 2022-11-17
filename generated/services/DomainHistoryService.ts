/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { response } from '../models/response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DomainHistoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Domain History
     * @returns response Get Domain History response
     * @throws ApiError
     */
    public domainHistoryGetDomainHistory({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/domain-history',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
