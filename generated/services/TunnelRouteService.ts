/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { comment } from '../models/comment';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { ip_network_encoded } from '../models/ip_network_encoded';
import type { route_response_collection } from '../models/route_response_collection';
import type { route_response_single } from '../models/route_response_single';
import type { teamnet_components_schemas_ip } from '../models/teamnet_components_schemas_ip';
import type { vnet_id } from '../models/vnet_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TunnelRouteService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Tunnel Routes
     * List, search and filter an account's tunnel routes.
     * @returns route_response_collection List Tunnel Routes response
     * @throws ApiError
     */
    public tunnelRouteListTunnelRoutes({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<route_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/teamnet/routes',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Get Tunnel Route by IP
     * Find the Tunnel Route that encompasses the given IP.
     * @returns route_response_single Get Tunnel Route by IP response
     * @throws ApiError
     */
    public tunnelRouteGetTunnelRouteByIp({
        ip,
        accountIdentifier,
    }: {
        ip: teamnet_components_schemas_ip,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<route_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/teamnet/routes/ip/{ip}',
            path: {
                'ip': ip,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Delete Route
     * Delete an existing route from the account's routing table.
     * @returns route_response_single Delete Route response
     * @throws ApiError
     */
    public tunnelRouteDeleteRoute({
        ipNetworkEncoded,
        accountIdentifier,
        requestBody,
    }: {
        ipNetworkEncoded: ip_network_encoded,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            virtual_network_id?: vnet_id;
        },
    }): CancelablePromise<route_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/teamnet/routes/network/{ip_network_encoded}',
            path: {
                'ip_network_encoded': ipNetworkEncoded,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Route
     * Update an existing route in the account's routing table for the given tunnel.
     * @returns route_response_single Update Route response
     * @throws ApiError
     */
    public tunnelRouteUpdateRoute({
        ipNetworkEncoded,
        accountIdentifier,
        requestBody,
    }: {
        ipNetworkEncoded: ip_network_encoded,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            comment?: comment;
            /**
             * New CIDR of this route.
             */
            network?: any;
            /**
             * UUID of the tunnel this route should belong to.
             */
            tunnel_id?: any;
            /**
             * UUID of the virtual network to which this route belongs to.
             */
            virtual_network_id?: any;
        },
    }): CancelablePromise<route_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/teamnet/routes/network/{ip_network_encoded}',
            path: {
                'ip_network_encoded': ipNetworkEncoded,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create Route
     * Add a new route to the account's routing table for the given tunnel.
     * @returns route_response_single Create Route response
     * @throws ApiError
     */
    public tunnelRouteCreateRoute({
        ipNetworkEncoded,
        accountIdentifier,
        requestBody,
    }: {
        ipNetworkEncoded: ip_network_encoded,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            comment?: comment;
            /**
             * UUID of the tunnel for which this route is being added.
             */
            tunnel_id: any;
            /**
             * optional UUID of the virtual network for which this route is being added; uses the default virtual network of the account if none is provided.
             */
            virtual_network_id?: any;
        },
    }): CancelablePromise<route_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/teamnet/routes/network/{ip_network_encoded}',
            path: {
                'ip_network_encoded': ipNetworkEncoded,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
