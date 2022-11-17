/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { result } from '../models/result';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DnsAnalyticsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Table
     * Retrieves a list of summarised aggregate metrics over a given time period.
     * @returns any Table response
     * @throws ApiError
     */
    public dnsAnalyticsTable({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_single & {
        result?: result;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/dns_analytics/report',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * By Time
     * Retrieves a list of aggregate metrics grouped by time interval.
     * @returns any By Time response
     * @throws ApiError
     */
    public dnsAnalyticsByTime({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_single & {
        result?: result;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/dns_analytics/report/bytime',
            path: {
                'identifier': identifier,
            },
        });
    }

}
