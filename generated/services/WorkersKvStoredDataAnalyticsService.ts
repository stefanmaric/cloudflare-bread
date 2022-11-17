/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { stored_components_schemas_result } from '../models/stored_components_schemas_result';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkersKvStoredDataAnalyticsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Query Stored Data Analytics
     * Retrieves Workers KV stored data metrics for the given account.
     * @returns any Query Stored Data Analytics response
     * @throws ApiError
     */
    public workersKvStoredDataAnalyticsQueryStoredDataAnalytics({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_single & {
        result?: stored_components_schemas_result;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/storage/analytics/stored',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
