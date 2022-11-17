/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { keys_components_schemas_identifier_2 } from '../models/keys_components_schemas_identifier_2';
import type { keys_components_schemas_single_response } from '../models/keys_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessKeyConfigurationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the Access key configuration
     * Gets the Access key rotation settings for an account.
     * @returns keys_components_schemas_single_response Get the Access key configuration response
     * @throws ApiError
     */
    public accessKeyConfigurationGetTheAccessKeyConfiguration({
        identifier,
    }: {
        identifier: keys_components_schemas_identifier_2,
    }): CancelablePromise<keys_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/keys',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update the Access key configuration
     * Updates the Access key rotation settings for an account.
     * @returns keys_components_schemas_single_response Update the Access key configuration response
     * @throws ApiError
     */
    public accessKeyConfigurationUpdateTheAccessKeyConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: keys_components_schemas_identifier_2,
        requestBody: any,
    }): CancelablePromise<keys_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/access/keys',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Rotate Access keys
     * Perfoms a key rotation for an account.
     * @returns keys_components_schemas_single_response Rotate Access keys response
     * @throws ApiError
     */
    public accessKeyConfigurationRotateAccessKeys({
        identifier,
        requestBody,
    }: {
        identifier: keys_components_schemas_identifier_2,
        requestBody: any,
    }): CancelablePromise<keys_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/keys/rotate',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

}
