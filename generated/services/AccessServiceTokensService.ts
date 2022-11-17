/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { create_response } from '../models/create_response';
import type { service_tokens_components_schemas_response_collection } from '../models/service_tokens_components_schemas_response_collection';
import type { service_tokens_components_schemas_single_response } from '../models/service_tokens_components_schemas_single_response';
import type { uuid } from '../models/uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessServiceTokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List service tokens
     * Lists all service tokens.
     * @returns service_tokens_components_schemas_response_collection List service tokens response
     * @throws ApiError
     */
    public accessServiceTokensListServiceTokens({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<service_tokens_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/service_tokens',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create a service token
     * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
     * @returns create_response Create a service token response
     * @throws ApiError
     */
    public accessServiceTokensCreateAServiceToken({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<create_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/service_tokens',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a service token
     * Deletes a service token.
     * @returns service_tokens_components_schemas_single_response Delete a service token response
     * @throws ApiError
     */
    public accessServiceTokensDeleteAServiceToken({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<service_tokens_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/access/service_tokens/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update a service token
     * Updates a configured service token.
     * @returns service_tokens_components_schemas_single_response Update a service token response
     * @throws ApiError
     */
    public accessServiceTokensUpdateAServiceToken({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<service_tokens_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/access/service_tokens/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Refresh a service token
     * Refreshes the expiration of a service token.
     * @returns service_tokens_components_schemas_single_response Refresh a service token response
     * @throws ApiError
     */
    public accessServiceTokensRefreshAServiceToken({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<service_tokens_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/service_tokens/{uuid}/refresh',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Rotate a service token
     * Generates a new Client Secret for a service token and revokes the old one.
     * @returns create_response Rotate a service token response
     * @throws ApiError
     */
    public accessServiceTokensRotateAServiceToken({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<create_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/service_tokens/{uuid}/rotate',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

}
