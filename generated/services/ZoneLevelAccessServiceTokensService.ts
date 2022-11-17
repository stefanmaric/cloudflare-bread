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

export class ZoneLevelAccessServiceTokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List service tokens
     * Lists all service tokens.
     * @returns service_tokens_components_schemas_response_collection List service tokens response
     * @throws ApiError
     */
    public zoneLevelAccessServiceTokensListServiceTokens({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<service_tokens_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/service_tokens',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create a service token
     * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to create a new service token.
     * @returns create_response Create a service token response
     * @throws ApiError
     */
    public zoneLevelAccessServiceTokensCreateAServiceToken({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<create_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/access/service_tokens',
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
    public zoneLevelAccessServiceTokensDeleteAServiceToken({
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
            url: '/zones/{identifier}/access/service_tokens/{uuid}',
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
    public zoneLevelAccessServiceTokensUpdateAServiceToken({
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
            url: '/zones/{identifier}/access/service_tokens/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
