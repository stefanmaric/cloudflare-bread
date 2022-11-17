/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { alert_types_components_schemas_response_collection } from '../models/alert_types_components_schemas_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationAlertTypesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Alert Types
     * Gets a list of all alert types for which an account is eligible.
     * @returns alert_types_components_schemas_response_collection Get Alert Types response
     * @throws ApiError
     */
    public notificationAlertTypesGetAlertTypes({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<alert_types_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/available_alerts',
            path: {
                'identifier': identifier,
            },
        });
    }

}
