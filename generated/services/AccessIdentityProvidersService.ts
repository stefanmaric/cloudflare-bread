/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { identity_providers_components_schemas_identifier } from '../models/identity_providers_components_schemas_identifier';
import type { identity_providers_components_schemas_response_collection } from '../models/identity_providers_components_schemas_response_collection';
import type { identity_providers_components_schemas_single_response } from '../models/identity_providers_components_schemas_single_response';
import type { uuid } from '../models/uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessIdentityProvidersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Access identity providers
     * Lists all configured identity providers.
     * @returns identity_providers_components_schemas_response_collection List Access identity providers response
     * @throws ApiError
     */
    public accessIdentityProvidersListAccessIdentityProviders({
        identifier,
    }: {
        identifier: identity_providers_components_schemas_identifier,
    }): CancelablePromise<identity_providers_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/identity_providers',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Add an Access identity provider
     * Adds a new identity provider to Access.
     * @returns identity_providers_components_schemas_single_response Add an Access identity provider response
     * @throws ApiError
     */
    public accessIdentityProvidersAddAnAccessIdentityProvider({
        identifier,
        requestBody,
    }: {
        identifier: identity_providers_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<identity_providers_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/identity_providers',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an Access identity provider
     * Deletes an identity provider from Access.
     * @returns identity_providers_components_schemas_single_response Delete an Access identity provider response
     * @throws ApiError
     */
    public accessIdentityProvidersDeleteAnAccessIdentityProvider({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: identity_providers_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<identity_providers_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/access/identity_providers/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get an Access identity provider
     * Fetches a configured identity provider.
     * @returns identity_providers_components_schemas_single_response Get an Access identity provider response
     * @throws ApiError
     */
    public accessIdentityProvidersGetAnAccessIdentityProvider({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: identity_providers_components_schemas_identifier,
    }): CancelablePromise<identity_providers_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/identity_providers/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update an Access identity provider
     * Updates a configured identity provider.
     * @returns identity_providers_components_schemas_single_response Update an Access identity provider response
     * @throws ApiError
     */
    public accessIdentityProvidersUpdateAnAccessIdentityProvider({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: identity_providers_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<identity_providers_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/access/identity_providers/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
