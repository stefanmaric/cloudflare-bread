/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_history_collection } from '../models/billing_history_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserBillingHistoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Billing History Details
     * Accesses your billing history object.
     * @returns billing_history_collection Billing History Details response
     * @throws ApiError
     */
    public userBillingHistoryBillingHistoryDetails(): CancelablePromise<billing_history_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/billing/history',
        });
    }

}
