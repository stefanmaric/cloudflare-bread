/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { config_response_single } from '../models/config_response_single';
import type { tunnel_id } from '../models/tunnel_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CloudflareTunnelConfigurationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Configuration
     * Get the configuration of a specific Cloudflare Tunnel.
     * @returns config_response_single Get Configuration response
     * @throws ApiError
     */
    public cloudflareTunnelConfigurationGetConfiguration({
        tunnelId,
        accountIdentifier,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<config_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/configurations',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Put Configuration
     * Add or update a configuration for a cloudflared tunnel.
     * @returns config_response_single Put Configuration response
     * @throws ApiError
     */
    public cloudflareTunnelConfigurationPutConfiguration({
        tunnelId,
        accountIdentifier,
        requestBody,
    }: {
        tunnelId: tunnel_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            /**
             * This is a json that conforms to the same syntax rules as the config.yaml.
             */
            config?: any;
        },
    }): CancelablePromise<config_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/configurations',
            path: {
                'tunnel_id': tunnelId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
