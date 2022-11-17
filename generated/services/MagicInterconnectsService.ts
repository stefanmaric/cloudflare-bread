/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_modified_tunnels_collection_response } from '../models/components_schemas_modified_tunnels_collection_response';
import type { components_schemas_tunnel_modified_response } from '../models/components_schemas_tunnel_modified_response';
import type { components_schemas_tunnel_single_response } from '../models/components_schemas_tunnel_single_response';
import type { components_schemas_tunnel_update_request } from '../models/components_schemas_tunnel_update_request';
import type { components_schemas_tunnels_collection_response } from '../models/components_schemas_tunnels_collection_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MagicInterconnectsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List interconnects
     * Lists interconnects associated with an account.
     * @returns components_schemas_tunnels_collection_response List interconnects response
     * @throws ApiError
     */
    public magicInterconnectsListInterconnects({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<components_schemas_tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/cf_interconnects',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update multiple interconnects
     * Updates multiple interconnects associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns components_schemas_modified_tunnels_collection_response Update multiple interconnects response
     * @throws ApiError
     */
    public magicInterconnectsUpdateMultipleInterconnects({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<components_schemas_modified_tunnels_collection_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/cf_interconnects',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List interconnect Details
     * Lists details for a specific interconnect.
     * @returns components_schemas_tunnel_single_response List interconnect Details response
     * @throws ApiError
     */
    public magicInterconnectsListInterconnectDetails({
        tunnelIdentifier,
        accountIdentifier,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<components_schemas_tunnel_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update interconnect
     * Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @returns components_schemas_tunnel_modified_response Update interconnect response
     * @throws ApiError
     */
    public magicInterconnectsUpdateInterconnect({
        tunnelIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        tunnelIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: components_schemas_tunnel_update_request,
    }): CancelablePromise<components_schemas_tunnel_modified_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}',
            path: {
                'tunnel_identifier': tunnelIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
