/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { eligibility_components_schemas_response_collection } from '../models/eligibility_components_schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationMechanismEligibilityService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get delivery mechanism eligibility
     * Get a list of all delivery mechanism types for which an account is eligible.
     * @returns eligibility_components_schemas_response_collection Get delivery mechanism eligibility response
     * @throws ApiError
     */
    public notificationMechanismEligibilityGetDeliveryMechanismEligibility({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<eligibility_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/destinations/eligible',
            path: {
                'identifier': identifier,
            },
        });
    }

}
