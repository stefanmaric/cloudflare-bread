/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_subscription_response_collection } from '../models/account_subscription_response_collection';
import type { account_subscription_response_single } from '../models/account_subscription_response_single';
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { subscription_v2 } from '../models/subscription_v2';
import type { subscription_v2_components_schemas_identifier } from '../models/subscription_v2_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountSubscriptionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Subscriptions
     * Lists all of an account's subscriptions.
     * @returns account_subscription_response_collection List Subscriptions response
     * @throws ApiError
     */
    public accountSubscriptionsListSubscriptions({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<account_subscription_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/subscriptions',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Subscription
     * Creates an account subscription.
     * @returns account_subscription_response_single Create Subscription response
     * @throws ApiError
     */
    public accountSubscriptionsCreateSubscription({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: subscription_v2,
    }): CancelablePromise<account_subscription_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/subscriptions',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Subscription
     * Deletes an account's subscription.
     * @returns any Delete Subscription response
     * @throws ApiError
     */
    public accountSubscriptionsDeleteSubscription({
        subscriptionIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        subscriptionIdentifier: subscription_v2_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/subscriptions/{subscription_identifier}',
            path: {
                'subscription_identifier': subscriptionIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update Subscription
     * Updates an account subscription.
     * @returns account_subscription_response_single Update Subscription response
     * @throws ApiError
     */
    public accountSubscriptionsUpdateSubscription({
        subscriptionIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        subscriptionIdentifier: subscription_v2_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: subscription_v2,
    }): CancelablePromise<account_subscription_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/subscriptions/{subscription_identifier}',
            path: {
                'subscription_identifier': subscriptionIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
