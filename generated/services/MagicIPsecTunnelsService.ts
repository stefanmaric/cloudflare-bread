/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { psk_generation_response } from '../models/psk_generation_response';
import type { schemas_modified_tunnels_collection_response } from '../models/schemas_modified_tunnels_collection_response';
import type { schemas_tunnel_deleted_response } from '../models/schemas_tunnel_deleted_response';
import type { schemas_tunnel_modified_response } from '../models/schemas_tunnel_modified_response';
import type { schemas_tunnel_single_response } from '../models/schemas_tunnel_single_response';
import type { schemas_tunnel_update_request } from '../models/schemas_tunnel_update_request';
import type { schemas_tunnels_collection_response } from '../models/schemas_tunnels_collection_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MagicIPsecTunnelsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List IPsec tunnels
     * Lists IPsec tunnels associated with an account.
     * @returns schemas_tunnels_collection_response List IPsec tunnels response
     * @throws ApiError
     */
    public magicIPsecTunnelsListIPsecTunnels({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/ipsec_tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create IPsec tunnels
     * Creates new IPsec tunnels associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns schemas_tunnels_collection_response Create IPsec tunnels response
     * @throws ApiError
     */
    public magicIPsecTunnelsCreateIPsecTunnels({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/magic/ipsec_tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update multiple IPsec tunnels
     * Update multiple IPsec tunnels associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns schemas_modified_tunnels_collection_response Update multiple IPsec tunnels response
     * @throws ApiError
     */
    public magicIPsecTunnelsUpdateMultipleIPsecTunnels({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_modified_tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/ipsec_tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete IPsec Tunnel
     * Disables and removes a specific static IPsec Tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns schemas_tunnel_deleted_response Delete IPsec Tunnel response
     * @throws ApiError
     */
    public magicIPsecTunnelsDeleteIPsecTunnel({
        tunnelIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_tunnel_deleted_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * List IPsec tunnel details
     * Lists details for a specific IPsec tunnel.
     * @returns schemas_tunnel_single_response List IPsec tunnel details response
     * @throws ApiError
     */
    public magicIPsecTunnelsListIPsecTunnelDetails({
        tunnelIdentifier,
        accountIdentifier,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_tunnel_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update IPsec Tunnel
     * Updates a specific IPsec tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns schemas_tunnel_modified_response Update IPsec Tunnel response
     * @throws ApiError
     */
    public magicIPsecTunnelsUpdateIPsecTunnel({
        tunnelIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: schemas_tunnel_update_request,
    }): CancelablePromise<schemas_tunnel_modified_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Generate Pre Shared Key (PSK) for IPsec tunnels
     * Generates a Pre Shared Key for a specific IPsec tunnel used in the IKE session. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes. After a PSK is generated, the PSK is immediately persisted to Cloudflare's edge and cannot be retrieved later. Note the PSK in a safe place.
     * @returns psk_generation_response Generate Pre Shared Key (PSK) for IPsec tunnels response
     * @throws ApiError
     */
    public magicIPsecTunnelsGeneratePreSharedKeyPskForIPsecTunnels({
        tunnelIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<psk_generation_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}/psk_generate',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
