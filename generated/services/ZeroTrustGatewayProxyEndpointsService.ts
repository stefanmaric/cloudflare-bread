/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { proxy_endpoints_components_schemas_empty_response } from '../models/proxy_endpoints_components_schemas_empty_response';
import type { proxy_endpoints_components_schemas_identifier } from '../models/proxy_endpoints_components_schemas_identifier';
import type { proxy_endpoints_components_schemas_response_collection } from '../models/proxy_endpoints_components_schemas_response_collection';
import type { proxy_endpoints_components_schemas_single_response } from '../models/proxy_endpoints_components_schemas_single_response';
import type { proxy_endpoints_components_schemas_uuid } from '../models/proxy_endpoints_components_schemas_uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustGatewayProxyEndpointsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Proxy Endpoints
     * Fetch a single Zero Trust Gateway Proxy Endpoint.
     * @returns proxy_endpoints_components_schemas_response_collection List Proxy Endpoints response
     * @throws ApiError
     */
    public zeroTrustGatewayProxyEndpointsListProxyEndpoints({
        identifier,
    }: {
        identifier: proxy_endpoints_components_schemas_identifier,
    }): CancelablePromise<proxy_endpoints_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/proxy_endpoints',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Proxy Endpoint
     * Create a new Zero Trust Gateway Proxy Endpoint.
     * @returns proxy_endpoints_components_schemas_single_response Create Proxy Endpoint response
     * @throws ApiError
     */
    public zeroTrustGatewayProxyEndpointsCreateProxyEndpoint({
        identifier,
        requestBody,
    }: {
        identifier: proxy_endpoints_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<proxy_endpoints_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/gateway/proxy_endpoints',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Proxy Endpoint
     * Delete a Zero Trust Gateway Proxy Endpoint.
     * @returns proxy_endpoints_components_schemas_empty_response Delete Proxy Endpoint response
     * @throws ApiError
     */
    public zeroTrustGatewayProxyEndpointsDeleteProxyEndpoint({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: proxy_endpoints_components_schemas_uuid,
        identifier: proxy_endpoints_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<proxy_endpoints_components_schemas_empty_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/gateway/proxy_endpoints/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Proxy Endpoint Details
     * List Zero Trust Gateway Proxy Endpoints for an account.
     * @returns proxy_endpoints_components_schemas_single_response Proxy Endpoint Details response
     * @throws ApiError
     */
    public zeroTrustGatewayProxyEndpointsProxyEndpointDetails({
        uuid,
        identifier,
    }: {
        uuid: proxy_endpoints_components_schemas_uuid,
        identifier: proxy_endpoints_components_schemas_identifier,
    }): CancelablePromise<proxy_endpoints_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/proxy_endpoints/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Proxy Endpoint
     * Update a new Zero Trust Gateway Proxy Endpoint.
     * @returns proxy_endpoints_components_schemas_single_response Update Proxy Endpoint response
     * @throws ApiError
     */
    public zeroTrustGatewayProxyEndpointsUpdateProxyEndpoint({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: proxy_endpoints_components_schemas_uuid,
        identifier: proxy_endpoints_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<proxy_endpoints_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{identifier}/gateway/proxy_endpoints/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
