/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { history_components_schemas_response_collection } from '../models/history_components_schemas_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationHistoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List History
     * Gets a list of history records for notifications sent to an account. The records are displayed for last `x` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).
     * @returns history_components_schemas_response_collection List History response
     * @throws ApiError
     */
    public notificationHistoryListHistory({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<history_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/history',
            path: {
                'identifier': identifier,
            },
        });
    }

}
