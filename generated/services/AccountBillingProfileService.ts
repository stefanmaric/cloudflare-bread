/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_identifier } from '../models/account_identifier';
import type { billing_response_single } from '../models/billing_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountBillingProfileService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Billing Profile Details
     * Gets the current billing profile for the account.
     * @returns billing_response_single Billing Profile Details response
     * @throws ApiError
     */
    public accountBillingProfileBillingProfileDetails({
        accountIdentifier,
    }: {
        accountIdentifier: account_identifier,
    }): CancelablePromise<billing_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/billing/profile',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
