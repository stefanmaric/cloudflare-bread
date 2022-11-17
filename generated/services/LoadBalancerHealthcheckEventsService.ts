/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { analytics_components_schemas_response_collection } from '../models/analytics_components_schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoadBalancerHealthcheckEventsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Healthcheck Events
     * List origin health changes.
     * @returns analytics_components_schemas_response_collection List Healthcheck Events response
     * @throws ApiError
     */
    public loadBalancerHealthcheckEventsListHealthcheckEvents(): CancelablePromise<analytics_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancing_analytics/events',
        });
    }

}
