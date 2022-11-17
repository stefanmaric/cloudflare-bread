/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { api_response_common } from '../models/api_response_common';
import type { api_response_single } from '../models/api_response_single';
import type { bulk_delete } from '../models/bulk_delete';
import type { bulk_write } from '../models/bulk_write';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_metadata } from '../models/components_schemas_metadata';
import type { create_rename_namespace_body } from '../models/create_rename_namespace_body';
import type { key_name } from '../models/key_name';
import type { kv_components_schemas_value } from '../models/kv_components_schemas_value';
import type { namespace } from '../models/namespace';
import type { namespace_identifier } from '../models/namespace_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkersKvNamespaceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Namespaces
     * Returns the namespaces owned by an account.
     * @returns any List Namespaces response
     * @throws ApiError
     */
    public workersKvNamespaceListNamespaces({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_collection & {
        result?: Array<namespace>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/storage/kv/namespaces',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create a Namespace
     * Creates a namespace under the given title. A 400 is returned if the account already owns a namespace with this title. A namespace must be explicitly deleted to be replaced.
     * @returns any Create a Namespace response
     * @throws ApiError
     */
    public workersKvNamespaceCreateANamespace({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: create_rename_namespace_body,
    }): CancelablePromise<(api_response_single & {
        result?: namespace;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/storage/kv/namespaces',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove a Namespace
     * Deletes the namespace corresponding to the given ID.
     * @returns api_response_single Remove a Namespace response
     * @throws ApiError
     */
    public workersKvNamespaceRemoveANamespace({
        namespaceIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}',
            path: {
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Rename a Namespace
     * Modifies a namespace's title.
     * @returns api_response_single Rename a Namespace response
     * @throws ApiError
     */
    public workersKvNamespaceRenameANamespace({
        namespaceIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: create_rename_namespace_body,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}',
            path: {
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete multiple key-value pairs
     * Remove multiple KV pairs from the Namespace. Body should be an array of up to 10,000 keys to be removed.
     * @returns api_response_single Delete multiple key-value pairs response
     * @throws ApiError
     */
    public workersKvNamespaceDeleteMultipleKeyValuePairs({
        namespaceIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: bulk_delete,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/bulk',
            path: {
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Write multiple key-value pairs
     * Write multiple keys and values at once. Body should be an array of up to 10,000 key-value pairs to be stored, along with optional expiration information. Existing values and expirations will be overwritten. If neither expiration nor expiration_ttl is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored. The entire request size must be 100 megabytes or less.
     * @returns api_response_single Write multiple key-value pairs response
     * @throws ApiError
     */
    public workersKvNamespaceWriteMultipleKeyValuePairs({
        namespaceIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: bulk_write,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/bulk',
            path: {
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List a Namespace's Keys
     * Lists a namespace's keys.
     * @returns any List a Namespace's Keys response
     * @throws ApiError
     */
    public workersKvNamespaceListANamespaceSKeys({
        namespaceIdentifier,
        accountIdentifier,
    }: {
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<api_response_common> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/keys',
            path: {
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Read the metadata for a key
     * Returns the metadata associated with the given key in the given namespace. Use URL-encoding to use special characters (e.g. :, !, %) in the key name.
     * @returns any Read the metadata for a key response
     * @throws ApiError
     */
    public workersKvNamespaceReadTheMetadataForAKey({
        keyName,
        namespaceIdentifier,
        accountIdentifier,
    }: {
        keyName: key_name,
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/metadata/{key_name}',
            path: {
                'key_name': keyName,
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Delete key-value pair
     * Remove a KV pair from the Namespace. Use URL-encoding to use special characters (e.g. :, !, %) in the key name.
     * @returns api_response_single Delete key-value pair response
     * @throws ApiError
     */
    public workersKvNamespaceDeleteKeyValuePair({
        keyName,
        namespaceIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        keyName: key_name,
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/values/{key_name}',
            path: {
                'key_name': keyName,
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Read key-value pair
     * Returns the value associated with the given key in the given namespace. Use URL-encoding to use special characters (e.g. :, !, %) in the key name. If the KV-pair is set to expire at some point, the expiration time as measured in seconds since the UNIX epoch will be returned in the "Expiration" response header.
     * @returns kv_components_schemas_value Read key-value pair response
     * @throws ApiError
     */
    public workersKvNamespaceReadKeyValuePair({
        keyName,
        namespaceIdentifier,
        accountIdentifier,
    }: {
        keyName: key_name,
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<kv_components_schemas_value> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/values/{key_name}',
            path: {
                'key_name': keyName,
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Write key-value pair with metadata
     * Write a value identified by a key. Use URL-encoding to use special characters (e.g. :, !, %) in the key name. Body should be the value to be stored along with json metadata to be associated with the key/value pair. Existing values, expirations and metadata will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.
     * @returns api_response_single Write key-value pair with metadata response
     * @throws ApiError
     */
    public workersKvNamespaceWriteKeyValuePairWithMetadata({
        keyName,
        namespaceIdentifier,
        accountIdentifier,
        formData,
    }: {
        keyName: key_name,
        namespaceIdentifier: namespace_identifier,
        accountIdentifier: common_components_schemas_identifier,
        formData: {
            metadata: components_schemas_metadata;
            value: kv_components_schemas_value;
        },
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/values/{key_name}',
            path: {
                'key_name': keyName,
                'namespace_identifier': namespaceIdentifier,
                'account_identifier': accountIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
