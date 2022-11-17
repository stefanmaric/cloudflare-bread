/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { colo_response } from '../models/colo_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { dashboard_response } from '../models/dashboard_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneAnalyticsDeprecatedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * Get analytics by Co-locations
     * This view provides a breakdown of analytics data by datacenter. Note: This is available to Enterprise customers only.
     * @returns colo_response Get analytics by Co-locations response
     * @throws ApiError
     */
    public zoneAnalyticsDeprecatedGetAnalyticsByCoLocations({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<colo_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/analytics/colos',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Get dashboard
     * The dashboard view provides both totals and timeseries data for the given zone and time period across the entire Cloudflare network.
     * @returns dashboard_response Get dashboard response
     * @throws ApiError
     */
    public zoneAnalyticsDeprecatedGetDashboard({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<dashboard_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/analytics/dashboard',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
