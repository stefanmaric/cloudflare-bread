/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { multiple_route_modified_response } from '../models/multiple_route_modified_response';
import type { route_deleted_response } from '../models/route_deleted_response';
import type { route_modified_response } from '../models/route_modified_response';
import type { route_single_response } from '../models/route_single_response';
import type { route_update_many_request } from '../models/route_update_many_request';
import type { route_update_request } from '../models/route_update_request';
import type { routes_collection_response } from '../models/routes_collection_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MagicStaticRoutesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Routes
     * List all Magic static routes.
     * @returns routes_collection_response List Routes response
     * @throws ApiError
     */
    public magicStaticRoutesListRoutes({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<routes_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/routes',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Routes
     * Creates a new Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.
     * @returns routes_collection_response Create Routes response
     * @throws ApiError
     */
    public magicStaticRoutesCreateRoutes({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<routes_collection_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/magic/routes',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Many Routes
     * Update multiple Magic static routes. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes. Only fields for a route that need to be changed need be provided.
     * @returns multiple_route_modified_response Update Many Routes response
     * @throws ApiError
     */
    public magicStaticRoutesUpdateManyRoutes({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: route_update_many_request,
    }): CancelablePromise<multiple_route_modified_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/routes',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Route
     * Disable and remove a specific Magic static route.
     * @returns route_deleted_response Delete Route response
     * @throws ApiError
     */
    public magicStaticRoutesDeleteRoute({
        routeIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        routeIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<route_deleted_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/magic/routes/{route_identifier}',
            path: {
                'route_identifier': routeIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Route Details
     * Get a specific Magic static route.
     * @returns route_single_response Route Details response
     * @throws ApiError
     */
    public magicStaticRoutesRouteDetails({
        routeIdentifier,
        accountIdentifier,
    }: {
        routeIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<route_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/routes/{route_identifier}',
            path: {
                'route_identifier': routeIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Route
     * Update a specific Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.
     * @returns route_modified_response Update Route response
     * @throws ApiError
     */
    public magicStaticRoutesUpdateRoute({
        routeIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        routeIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: route_update_request,
    }): CancelablePromise<route_modified_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/routes/{route_identifier}',
            path: {
                'route_identifier': routeIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
