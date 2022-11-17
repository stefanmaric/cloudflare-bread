/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_response_single } from '../models/billing_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserBillingProfileService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Billing Profile Details
     * Accesses your billing profile object.
     * @returns billing_response_single Billing Profile Details response
     * @throws ApiError
     */
    public userBillingProfileBillingProfileDetails(): CancelablePromise<billing_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/billing/profile',
        });
    }

}
