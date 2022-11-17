/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_result } from '../models/components_schemas_result';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkersKvRequestAnalyticsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Query Request Analytics
     * Retrieves Workers KV request metrics for the given account.
     * @returns any Query Request Analytics response
     * @throws ApiError
     */
    public workersKvRequestAnalyticsQueryRequestAnalytics({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_single & {
        result?: components_schemas_result;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/storage/analytics',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
