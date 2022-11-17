/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { uuid } from '../models/uuid';
import type { webhooks_components_schemas_id_response } from '../models/webhooks_components_schemas_id_response';
import type { webhooks_components_schemas_response_collection } from '../models/webhooks_components_schemas_response_collection';
import type { webhooks_components_schemas_single_response } from '../models/webhooks_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationWebhooksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List webhooks
     * Gets a list of all configured webhook destinations.
     * @returns webhooks_components_schemas_response_collection List webhooks response
     * @throws ApiError
     */
    public notificationWebhooksListWebhooks({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<webhooks_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/destinations/webhooks',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create a webhook
     * Creates a new webhook destination.
     * @returns webhooks_components_schemas_id_response Create a webhook response
     * @throws ApiError
     */
    public notificationWebhooksCreateAWebhook({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<webhooks_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/alerting/v3/destinations/webhooks',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a webhook
     * Delete a configured webhook destination.
     * @returns api_response_collection Delete a webhook response
     * @throws ApiError
     */
    public notificationWebhooksDeleteAWebhook({
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
            url: '/accounts/{identifier}/alerting/v3/destinations/webhooks/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a webhook
     * Get details for a single webhooks destination.
     * @returns webhooks_components_schemas_single_response Get a webhook response
     * @throws ApiError
     */
    public notificationWebhooksGetAWebhook({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<webhooks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/alerting/v3/destinations/webhooks/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update a webhook
     * Update a webhook destination.
     * @returns webhooks_components_schemas_id_response Update a webhook response
     * @throws ApiError
     */
    public notificationWebhooksUpdateAWebhook({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<webhooks_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/alerting/v3/destinations/webhooks/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
