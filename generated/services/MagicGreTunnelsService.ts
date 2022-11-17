/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { modified_tunnels_collection_response } from '../models/modified_tunnels_collection_response';
import type { tunnel_deleted_response } from '../models/tunnel_deleted_response';
import type { tunnel_modified_response } from '../models/tunnel_modified_response';
import type { tunnel_single_response } from '../models/tunnel_single_response';
import type { tunnel_update_request } from '../models/tunnel_update_request';
import type { tunnels_collection_response } from '../models/tunnels_collection_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MagicGreTunnelsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List GRE tunnels
     * Lists GRE tunnels associated with an account.
     * @returns tunnels_collection_response List GRE tunnels response
     * @throws ApiError
     */
    public magicGreTunnelsListGreTunnels({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/gre_tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create GRE tunnels
     * Creates new GRE tunnels. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns tunnels_collection_response Create GRE tunnels response
     * @throws ApiError
     */
    public magicGreTunnelsCreateGreTunnels({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/magic/gre_tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update multiple GRE tunnels
     * Updates multiple GRE tunnels. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns modified_tunnels_collection_response Update multiple GRE tunnels response
     * @throws ApiError
     */
    public magicGreTunnelsUpdateMultipleGreTunnels({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<modified_tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/gre_tunnels',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete GRE Tunnel
     * Disables and removes a specific static GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns tunnel_deleted_response Delete GRE Tunnel response
     * @throws ApiError
     */
    public magicGreTunnelsDeleteGreTunnel({
        tunnelIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<tunnel_deleted_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * List GRE Tunnel Details
     * Lists informtion for a specific GRE tunnel.
     * @returns tunnel_single_response List GRE Tunnel Details response
     * @throws ApiError
     */
    public magicGreTunnelsListGreTunnelDetails({
        tunnelIdentifier,
        accountIdentifier,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<tunnel_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update GRE Tunnel
     * Updates a specific GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns tunnel_modified_response Update GRE Tunnel response
     * @throws ApiError
     */
    public magicGreTunnelsUpdateGreTunnel({
        tunnelIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: tunnel_update_request,
    }): CancelablePromise<tunnel_modified_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
