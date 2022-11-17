/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { policies_components_schemas_id_response_2 } from '../models/policies_components_schemas_id_response_2';
import type { policies_components_schemas_response_collection_2 } from '../models/policies_components_schemas_response_collection_2';
import type { policies_components_schemas_single_response_2 } from '../models/policies_components_schemas_single_response_2';
import type { uuid } from '../models/uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationPoliciesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Notification policies
     * Get a list of all Notification policies.
     * @returns policies_components_schemas_response_collection_2 List Notification policies response
     * @throws ApiError
     */
    public notificationPoliciesListNotificationPolicies({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<policies_components_schemas_response_collection_2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/policies',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create a Notification policy
     * Creates a new Notification policy.
     * @returns policies_components_schemas_id_response_2 Create a Notification policy response
     * @throws ApiError
     */
    public notificationPoliciesCreateANotificationPolicy({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<policies_components_schemas_id_response_2> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/alerting/v3/policies',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Notification policy
     * Delete a Notification policy.
     * @returns api_response_collection Delete a Notification policy response
     * @throws ApiError
     */
    public notificationPoliciesDeleteANotificationPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/alerting/v3/policies/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a Notification policy
     * Get details for a single policy.
     * @returns policies_components_schemas_single_response_2 Get a Notification policy response
     * @throws ApiError
     */
    public notificationPoliciesGetANotificationPolicy({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<policies_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/policies/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update a Notification policy
     * Update a Notification policy.
     * @returns policies_components_schemas_id_response_2 Update a Notification policy response
     * @throws ApiError
     */
    public notificationPoliciesUpdateANotificationPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<policies_components_schemas_id_response_2> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/alerting/v3/policies/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
