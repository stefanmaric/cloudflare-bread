/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { health_details } from '../models/health_details';
import type { pool_components_schemas_id_response } from '../models/pool_components_schemas_id_response';
import type { pool_components_schemas_identifier } from '../models/pool_components_schemas_identifier';
import type { pool_components_schemas_response_collection } from '../models/pool_components_schemas_response_collection';
import type { pool_components_schemas_single_response } from '../models/pool_components_schemas_single_response';
import type { preview_response } from '../models/preview_response';
import type { schemas_references_response } from '../models/schemas_references_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoadBalancerPoolsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Pools
     * List configured pools.
     * @returns pool_components_schemas_response_collection List Pools response
     * @throws ApiError
     */
    public loadBalancerPoolsListPools(): CancelablePromise<pool_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/pools',
        });
    }

    /**
     * Patch Pools
     * Apply changes to a number of existing pools, overwriting the supplied properties. Pools are ordered by ascending `name`. Returns the list of affected pools. Supports the standard pagination query parameters, either `limit`/`offset` or `per_page`/`page`.
     * @returns pool_components_schemas_response_collection Patch Pools response
     * @throws ApiError
     */
    public loadBalancerPoolsPatchPools({
        requestBody,
    }: {
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/load_balancers/pools',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create Pool
     * Create a new pool.
     * @returns pool_components_schemas_single_response Create Pool response
     * @throws ApiError
     */
    public loadBalancerPoolsCreatePool({
        requestBody,
    }: {
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/load_balancers/pools',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Pool
     * Delete a configured pool.
     * @returns pool_components_schemas_id_response Delete Pool response
     * @throws ApiError
     */
    public loadBalancerPoolsDeletePool({
        identifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Pool Details
     * Fetch a single configured pool.
     * @returns pool_components_schemas_single_response Pool Details response
     * @throws ApiError
     */
    public loadBalancerPoolsPoolDetails({
        identifier,
    }: {
        identifier: pool_components_schemas_identifier,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Patch Pool
     * Apply changes to an existing pool, overwriting the supplied properties.
     * @returns pool_components_schemas_single_response Patch Pool response
     * @throws ApiError
     */
    public loadBalancerPoolsPatchPool({
        identifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Pool
     * Modify a configured pool.
     * @returns pool_components_schemas_single_response Update Pool response
     * @throws ApiError
     */
    public loadBalancerPoolsUpdatePool({
        identifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Pool Health Details
     * Fetch the latest pool health status for a single pool.
     * @returns health_details Pool Health Details response
     * @throws ApiError
     */
    public loadBalancerPoolsPoolHealthDetails({
        identifier,
    }: {
        identifier: pool_components_schemas_identifier,
    }): CancelablePromise<health_details> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/pools/{identifier}/health',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Preview Pool
     * Preview pool health using provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
     * @returns preview_response Preview Pool response
     * @throws ApiError
     */
    public loadBalancerPoolsPreviewPool({
        identifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<preview_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/load_balancers/pools/{identifier}/preview',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Pool References
     * Get the list of resources that reference the provided pool.
     * @returns schemas_references_response List Pool References response
     * @throws ApiError
     */
    public loadBalancerPoolsListPoolReferences({
        identifier,
    }: {
        identifier: pool_components_schemas_identifier,
    }): CancelablePromise<schemas_references_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/load_balancers/pools/{identifier}/references',
            path: {
                'identifier': identifier,
            },
        });
    }

}
