/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { deleted_response } from '../models/deleted_response';
import type { key_generation_response } from '../models/key_generation_response';
import type { key_response_collection } from '../models/key_response_collection';
import type { keys_components_schemas_identifier } from '../models/keys_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamSigningKeysService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List signing keys
     * Lists the video ID and creation date and time when a signing key was created.
     * @returns key_response_collection List signing keys response
     * @throws ApiError
     */
    public streamSigningKeysListSigningKeys({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<key_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/keys',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create signing keys
     * Creates an RSA private key in PEM and JWK formats. Key files are only displayed once after creation. Keys are created, used, and deleted independently of videos, and every key can sign any video.
     * @returns key_generation_response Create signing keys response
     * @throws ApiError
     */
    public streamSigningKeysCreateSigningKeys({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<key_generation_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/keys',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Delete signing keys
     * Deletes signing keys and revokes all signed URLs generated with the key.
     * @returns deleted_response Delete signing keys response
     * @throws ApiError
     */
    public streamSigningKeysDeleteSigningKeys({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: keys_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<deleted_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/stream/keys/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
