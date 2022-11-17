/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { argo_tunnel_components_schemas_empty_response } from '../models/argo_tunnel_components_schemas_empty_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { tunnel_id } from '../models/tunnel_id';
import type { tunnel_name } from '../models/tunnel_name';
import type { tunnel_response_collection } from '../models/tunnel_response_collection';
import type { tunnel_response_single } from '../models/tunnel_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ArgoTunnelService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Argo Tunnels
     * List, search and filter an account's Argo Tunnels.
     * @returns tunnel_response_collection List Argo Tunnels response
     * @throws ApiError
     */
    public argoTunnelListArgoTunnels({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<tunnel_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Create Argo Tunnel
     * Create an Argo Tunnel in an account.
     * @returns tunnel_response_single Create Argo Tunnel response
     * @throws ApiError
     */
    public argoTunnelCreateArgoTunnel({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            name: tunnel_name;
            /**
             * 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
             */
            tunnel_secret: string;
        },
    }): CancelablePromise<tunnel_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Delete Argo Tunnel
     * Delete an Argo Tunnel from an account.
     * @returns tunnel_response_single Delete Argo Tunnel response
     * @throws ApiError
     */
    public argoTunnelDeleteArgoTunnel({
        tunnelId,
        accountIdentifier,
        requestBody,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: Record<string, any>,
    }): CancelablePromise<tunnel_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/tunnels/{tunnel_id}',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get Argo Tunnel
     * Get the details of an Argo Tunnel from an account.
     * @returns tunnel_response_single Get Argo Tunnel response
     * @throws ApiError
     */
    public argoTunnelGetArgoTunnel({
        tunnelId,
        accountIdentifier,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<tunnel_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/tunnels/{tunnel_id}',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Clean Up Argo Tunnel Connections
     * Remove stale connection resources from an Argo Tunnel.
     * @returns argo_tunnel_components_schemas_empty_response Clean Up Argo Tunnel Connections response
     * @throws ApiError
     */
    public argoTunnelCleanUpArgoTunnelConnections({
        tunnelId,
        accountIdentifier,
        requestBody,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: Record<string, any>,
    }): CancelablePromise<argo_tunnel_components_schemas_empty_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/tunnels/{tunnel_id}/connections',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
