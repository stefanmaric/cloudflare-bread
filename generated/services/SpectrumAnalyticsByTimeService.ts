/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SpectrumAnalyticsByTimeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get analytics by time
     * Retrieves a list of aggregate metrics grouped by time interval.
     * @returns api_response_single Get analytics by time response
     * @throws ApiError
     */
    public spectrumAnalyticsByTimeGetAnalyticsByTime({
        zone,
    }: {
        zone: common_components_schemas_identifier,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone}/spectrum/analytics/events/bytime',
            path: {
                'zone': zone,
            },
        });
    }

}
