/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SpectrumAnalyticsSummaryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get analytics summary
     * Retrieves a list of summarised aggregate metrics over a given time period.
     * @returns api_response_single Get analytics summary response
     * @throws ApiError
     */
    public spectrumAnalyticsSummaryGetAnalyticsSummary({
        zone,
    }: {
        zone: common_components_schemas_identifier,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone}/spectrum/analytics/events/summary',
            path: {
                'zone': zone,
            },
        });
    }

}
