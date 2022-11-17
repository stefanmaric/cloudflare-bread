/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscription_v2 } from '../models/subscription_v2';
import type { subscription_v2_components_schemas_identifier } from '../models/subscription_v2_components_schemas_identifier';
import type { user_subscription_response_collection } from '../models/user_subscription_response_collection';
import type { user_subscription_response_single } from '../models/user_subscription_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserSubscriptionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get User Subscriptions
     * Lists all of a user's subscriptions.
     * @returns user_subscription_response_collection Get User Subscriptions response
     * @throws ApiError
     */
    public userSubscriptionGetUserSubscriptions(): CancelablePromise<user_subscription_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/subscriptions',
        });
    }

    /**
     * Delete User Subscription
     * Deletes a user's subscription.
     * @returns any Delete User Subscription response
     * @throws ApiError
     */
    public userSubscriptionDeleteUserSubscription({
        identifier,
        requestBody,
    }: {
        identifier: subscription_v2_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<{
        subscription_id?: subscription_v2_components_schemas_identifier;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/subscriptions/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update User Subscription
     * Updates a user's subscriptions.
     * @returns user_subscription_response_single Update User Subscription response
     * @throws ApiError
     */
    public userSubscriptionUpdateUserSubscription({
        identifier,
        requestBody,
    }: {
        identifier: subscription_v2_components_schemas_identifier,
        requestBody: subscription_v2,
    }): CancelablePromise<user_subscription_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/subscriptions/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
