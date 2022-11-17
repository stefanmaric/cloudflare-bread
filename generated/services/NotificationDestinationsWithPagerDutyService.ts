/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { pagerduty_components_schemas_response_collection } from '../models/pagerduty_components_schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationDestinationsWithPagerDutyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List PagerDuty services
     * Get a list of all configured PagerDuty services.
     * @returns pagerduty_components_schemas_response_collection List PagerDuty services response
     * @throws ApiError
     */
    public notificationDestinationsWithPagerDutyListPagerDutyServices({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<pagerduty_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/destinations/pagerduty',
            path: {
                'identifier': identifier,
            },
        });
    }

}
