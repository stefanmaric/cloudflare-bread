/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { analytics_aggregate_components_schemas_response_collection } from '../models/analytics_aggregate_components_schemas_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SpectrumAggregateAnalyticsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get current aggregated analytics
     * Retrieves analytics aggregated from the last minute of usage on Spectrum applications underneath a given zone.
     * @returns analytics_aggregate_components_schemas_response_collection Get current aggregated analytics response
     * @throws ApiError
     */
    public spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics({
        zone,
    }: {
        zone: common_components_schemas_identifier,
    }): CancelablePromise<analytics_aggregate_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone}/spectrum/analytics/aggregate/current',
            path: {
                'zone': zone,
            },
        });
    }

}
