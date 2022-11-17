/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_response_single } from '../models/schemas_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ArgoAnalyticsForZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Argo Analytics for a zone
     * @returns schemas_response_single Argo Analytics for a zone response
     * @throws ApiError
     */
    public argoAnalyticsForZoneArgoAnalyticsForAZone({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/analytics/latency',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
