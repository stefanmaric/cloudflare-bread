/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { cloudflare_tunnel_components_schemas_empty_response } from '../models/cloudflare_tunnel_components_schemas_empty_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_tunnel_response_collection } from '../models/schemas_tunnel_response_collection';
import type { schemas_tunnel_response_single } from '../models/schemas_tunnel_response_single';
import type { tunnel_connections_response } from '../models/tunnel_connections_response';
import type { tunnel_id } from '../models/tunnel_id';
import type { tunnel_name } from '../models/tunnel_name';
import type { tunnel_response_token } from '../models/tunnel_response_token';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CloudflareTunnelService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Cloudflare Tunnels
     * List, search and filter an account's Cloudflare Tunnels.
     * @returns schemas_tunnel_response_collection List Cloudflare Tunnels response
     * @throws ApiError
     */
    public cloudflareTunnelListCloudflareTunnels({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_tunnel_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/cfd_tunnel',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Cloudflare Tunnel
     * Create a Cloudflare Tunnel in an account.
     * @returns schemas_tunnel_response_single Create Cloudflare Tunnel response
     * @throws ApiError
     */
    public cloudflareTunnelCreateCloudflareTunnel({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            name: tunnel_name;
            /**
             * A secret encoded as a base64 string. The Create Cloudflare Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
             */
            tunnel_secret: string;
        },
    }): CancelablePromise<schemas_tunnel_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/cfd_tunnel',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Cloudflare Tunnel
     * Delete a Cloudflare Tunnel from an account.
     * @returns schemas_tunnel_response_single Delete Cloudflare Tunnel response
     * @throws ApiError
     */
    public cloudflareTunnelDeleteCloudflareTunnel({
        tunnelId,
        accountIdentifier,
        requestBody,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: Record<string, any>,
    }): CancelablePromise<schemas_tunnel_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Cloudflare Tunnel
     * Get the details of a Cloudflare Tunnel from an account.
     * @returns schemas_tunnel_response_single Get Cloudflare Tunnel response
     * @throws ApiError
     */
    public cloudflareTunnelGetCloudflareTunnel({
        tunnelId,
        accountIdentifier,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_tunnel_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Cloudflare Tunnel
     * Updates a Cloudflare Tunnel in an account.
     * @returns schemas_tunnel_response_single Update Cloudflare Tunnel response
     * @throws ApiError
     */
    public cloudflareTunnelUpdateCloudflareTunnel({
        tunnelId,
        accountIdentifier,
        requestBody,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            name?: tunnel_name;
            /**
             * A secret encoded as a base64 string. The endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
             */
            tunnel_secret?: string;
        },
    }): CancelablePromise<schemas_tunnel_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Clean Up Cloudflare Tunnel Connections
     * Remove stale connection resources from a Cloudflare Tunnel.
     * @returns cloudflare_tunnel_components_schemas_empty_response Clean Up Cloudflare Tunnel Connections response
     * @throws ApiError
     */
    public cloudflareTunnelCleanUpCloudflareTunnelConnections({
        tunnelId,
        accountIdentifier,
        requestBody,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: Record<string, any>,
    }): CancelablePromise<cloudflare_tunnel_components_schemas_empty_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/connections',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Cloudflare Tunnel Connections
     * List all of the connection resources for a Cloudflare Tunnel.
     * @returns tunnel_connections_response List Cloudflare Tunnel Connections response
     * @throws ApiError
     */
    public cloudflareTunnelListCloudflareTunnelConnections({
        tunnelId,
        accountIdentifier,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<tunnel_connections_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/connections',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Get Cloudflare Tunnel Token
     * Gets the Tunnel for a previously created Cloudflare Tunnel.
     * @returns tunnel_response_token Get Cloudflare Tunnel Token response
     * @throws ApiError
     */
    public cloudflareTunnelGetCloudflareTunnelToken({
        tunnelId,
        accountIdentifier,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<tunnel_response_token> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/token',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
