/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { health_details } from '../models/health_details';
import type { pool_components_schemas_id_response } from '../models/pool_components_schemas_id_response';
import type { pool_components_schemas_identifier } from '../models/pool_components_schemas_identifier';
import type { pool_components_schemas_response_collection } from '../models/pool_components_schemas_response_collection';
import type { pool_components_schemas_single_response } from '../models/pool_components_schemas_single_response';
import type { preview_response } from '../models/preview_response';
import type { schemas_references_response } from '../models/schemas_references_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountLoadBalancerPoolsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Pools
     * List configured pools.
     * @returns pool_components_schemas_response_collection List Pools response
     * @throws ApiError
     */
    public accountLoadBalancerPoolsListPools({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pool_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/pools',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Patch Pools
     * Apply changes to a number of existing pools, overwriting the supplied properties. Pools are ordered by ascending `name`. Returns the list of affected pools. Supports the standard pagination query parameters, either `limit`/`offset` or `per_page`/`page`.
     * @returns pool_components_schemas_response_collection Patch Pools response
     * @throws ApiError
     */
    public accountLoadBalancerPoolsPatchPools({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/load_balancers/pools',
            path: {
                'account_identifier': accountIdentifier,
            },
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
    public accountLoadBalancerPoolsCreatePool({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/load_balancers/pools',
            path: {
                'account_identifier': accountIdentifier,
            },
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
    public accountLoadBalancerPoolsDeletePool({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
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
    public accountLoadBalancerPoolsPoolDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: pool_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Patch Pool
     * Apply changes to an existing pool, overwriting the supplied properties.
     * @returns pool_components_schemas_single_response Patch Pool response
     * @throws ApiError
     */
    public accountLoadBalancerPoolsPatchPool({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
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
    public accountLoadBalancerPoolsUpdatePool({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<pool_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/load_balancers/pools/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
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
    public accountLoadBalancerPoolsPoolHealthDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: pool_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<health_details> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/pools/{identifier}/health',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Preview Pool
     * Preview pool health using provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
     * @returns preview_response Preview Pool response
     * @throws ApiError
     */
    public accountLoadBalancerPoolsPreviewPool({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: pool_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<preview_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/load_balancers/pools/{identifier}/preview',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
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
    public accountLoadBalancerPoolsListPoolReferences({
        identifier,
        accountIdentifier,
    }: {
        identifier: pool_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_references_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/pools/{identifier}/references',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
