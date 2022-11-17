/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SslTlsModeRecommendationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * SSL/TLS Recommendation
     * Retrieve the SSL/TLS Recommender's recommendation for a zone.
     * @returns any SSL/TLS Recommendation response
     * @throws ApiError
     */
    public sslTlsModeRecommendationSslTlsRecommendation({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/ssl/recommendation',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
