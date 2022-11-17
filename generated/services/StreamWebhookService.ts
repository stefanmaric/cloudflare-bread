/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deleted_response } from '../models/deleted_response';
import type { webhook_components_schemas_account_identifier } from '../models/webhook_components_schemas_account_identifier';
import type { webhook_request } from '../models/webhook_request';
import type { webhook_response_single } from '../models/webhook_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamWebhookService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete webhooks
     * Deletes a webhook.
     * @returns deleted_response Delete webhooks response
     * @throws ApiError
     */
    public streamWebhookDeleteWebhooks({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: webhook_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<deleted_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/stream/webhook',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * View webhooks
     * Retrieves a list of webhooks.
     * @returns webhook_response_single View webhooks response
     * @throws ApiError
     */
    public streamWebhookViewWebhooks({
        accountIdentifier,
    }: {
        accountIdentifier: webhook_components_schemas_account_identifier,
    }): CancelablePromise<webhook_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/webhook',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create webhooks
     * Creates a webhook notification.
     * @returns webhook_response_single Create webhooks response
     * @throws ApiError
     */
    public streamWebhookCreateWebhooks({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: webhook_components_schemas_account_identifier,
        requestBody: webhook_request,
    }): CancelablePromise<webhook_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/stream/webhook',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
