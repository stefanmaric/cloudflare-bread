/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscription_v2 } from '../models/subscription_v2';
import type { subscription_v2_components_schemas_identifier } from '../models/subscription_v2_components_schemas_identifier';
import type { zone_subscription_response_single } from '../models/zone_subscription_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneSubscriptionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Zone Subscription Details
     * Lists zone subscription details.
     * @returns zone_subscription_response_single Zone Subscription Details response
     * @throws ApiError
     */
    public zoneSubscriptionZoneSubscriptionDetails({
        identifier,
    }: {
        identifier: subscription_v2_components_schemas_identifier,
    }): CancelablePromise<zone_subscription_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/subscription',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Zone Subscription
     * Create a zone subscription, either plan or add-ons.
     * @returns zone_subscription_response_single Create Zone Subscription response
     * @throws ApiError
     */
    public zoneSubscriptionCreateZoneSubscription({
        identifier,
        requestBody,
    }: {
        identifier: subscription_v2_components_schemas_identifier,
        requestBody: subscription_v2,
    }): CancelablePromise<zone_subscription_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/subscription',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Zone Subscription
     * Updates zone subscriptions, either plan or add-ons.
     * @returns zone_subscription_response_single Update Zone Subscription response
     * @throws ApiError
     */
    public zoneSubscriptionUpdateZoneSubscription({
        identifier,
        requestBody,
    }: {
        identifier: subscription_v2_components_schemas_identifier,
        requestBody: subscription_v2,
    }): CancelablePromise<zone_subscription_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier}/subscription',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
