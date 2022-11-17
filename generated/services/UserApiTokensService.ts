/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single_id } from '../models/api_response_single_id';
import type { create_payload } from '../models/create_payload';
import type { response_collection } from '../models/response_collection';
import type { response_create } from '../models/response_create';
import type { response_single } from '../models/response_single';
import type { response_single_segment } from '../models/response_single_segment';
import type { response_single_value } from '../models/response_single_value';
import type { schemas_identifier } from '../models/schemas_identifier';
import type { schemas_token } from '../models/schemas_token';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserApiTokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Tokens
     * List all access tokens you created.
     * @returns response_collection List Tokens response
     * @throws ApiError
     */
    public userApiTokensListTokens(): CancelablePromise<response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/tokens',
        });
    }

    /**
     * Create Token
     * Create a new access token.
     * @returns response_create Create Token response
     * @throws ApiError
     */
    public userApiTokensCreateToken({
        requestBody,
    }: {
        requestBody: create_payload,
    }): CancelablePromise<response_create> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/tokens',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Verify Token
     * Test whether a token works.
     * @returns response_single_segment Verify Token response
     * @throws ApiError
     */
    public userApiTokensVerifyToken(): CancelablePromise<response_single_segment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/tokens/verify',
        });
    }

    /**
     * Delete Token
     * Destroy a token.
     * @returns api_response_single_id Delete Token response
     * @throws ApiError
     */
    public userApiTokensDeleteToken({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/tokens/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Token Details
     * Get information about a specific token.
     * @returns response_single Token Details response
     * @throws ApiError
     */
    public userApiTokensTokenDetails({
        identifier,
    }: {
        identifier: schemas_identifier,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/tokens/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Token
     * Update an existing token.
     * @returns response_single Update Token response
     * @throws ApiError
     */
    public userApiTokensUpdateToken({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: schemas_token,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/tokens/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Roll Token
     * Roll the token secret.
     * @returns response_single_value Roll Token response
     * @throws ApiError
     */
    public userApiTokensRollToken({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: Record<string, any>,
    }): CancelablePromise<response_single_value> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/tokens/{identifier}/value',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
