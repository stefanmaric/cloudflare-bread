/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { load_balancer_components_schemas_id_response } from '../models/load_balancer_components_schemas_id_response';
import type { load_balancer_components_schemas_identifier } from '../models/load_balancer_components_schemas_identifier';
import type { load_balancer_components_schemas_response_collection } from '../models/load_balancer_components_schemas_response_collection';
import type { load_balancer_components_schemas_single_response } from '../models/load_balancer_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoadBalancersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete Load Balancer
     * Delete a configured load balancer.
     * @returns load_balancer_components_schemas_id_response Delete Load Balancer response
     * @throws ApiError
     */
    public loadBalancersDeleteLoadBalancer({
        identifier,
        identifier1,
        requestBody,
    }: {
        identifier: load_balancer_components_schemas_identifier,
        identifier1: load_balancer_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<load_balancer_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{identifier1}/load_balancers/{identifier}',
            path: {
                'identifier': identifier,
                'identifier1': identifier1,
            },
            body: requestBody,
        });
    }

    /**
     * Load Balancer Details
     * Fetch a single configured load balancer.
     * @returns load_balancer_components_schemas_single_response Load Balancer Details response
     * @throws ApiError
     */
    public loadBalancersLoadBalancerDetails({
        identifier,
        identifier1,
    }: {
        identifier: load_balancer_components_schemas_identifier,
        identifier1: load_balancer_components_schemas_identifier,
    }): CancelablePromise<load_balancer_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier1}/load_balancers/{identifier}',
            path: {
                'identifier': identifier,
                'identifier1': identifier1,
            },
        });
    }

    /**
     * Patch Load Balancer
     * Apply changes to an existing load balancer, overwriting the supplied properties.
     * @returns load_balancer_components_schemas_single_response Patch Load Balancer response
     * @throws ApiError
     */
    public loadBalancersPatchLoadBalancer({
        identifier,
        identifier1,
        requestBody,
    }: {
        identifier: load_balancer_components_schemas_identifier,
        identifier1: load_balancer_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<load_balancer_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{identifier1}/load_balancers/{identifier}',
            path: {
                'identifier': identifier,
                'identifier1': identifier1,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Load Balancer
     * Update a configured load balancer.
     * @returns load_balancer_components_schemas_single_response Update Load Balancer response
     * @throws ApiError
     */
    public loadBalancersUpdateLoadBalancer({
        identifier,
        identifier1,
        requestBody,
    }: {
        identifier: load_balancer_components_schemas_identifier,
        identifier1: load_balancer_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<load_balancer_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier1}/load_balancers/{identifier}',
            path: {
                'identifier': identifier,
                'identifier1': identifier1,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Load Balancers
     * List configured load balancers.
     * @returns load_balancer_components_schemas_response_collection List Load Balancers response
     * @throws ApiError
     */
    public loadBalancersListLoadBalancers({
        identifier,
    }: {
        identifier: load_balancer_components_schemas_identifier,
    }): CancelablePromise<load_balancer_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/load_balancers',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Load Balancer
     * Create a new load balancer.
     * @returns load_balancer_components_schemas_single_response Create Load Balancer response
     * @throws ApiError
     */
    public loadBalancersCreateLoadBalancer({
        identifier,
        requestBody,
    }: {
        identifier: load_balancer_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<load_balancer_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/load_balancers',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
