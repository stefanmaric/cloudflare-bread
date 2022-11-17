/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { is_default_network } from '../models/is_default_network';
import type { schemas_comment } from '../models/schemas_comment';
import type { vnet_id } from '../models/vnet_id';
import type { vnet_name } from '../models/vnet_name';
import type { vnet_response_collection } from '../models/vnet_response_collection';
import type { vnet_response_single } from '../models/vnet_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TunnelVirtualNetworkService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Virtual Networks
     * List, search and filter an account's virtual networks.
     * @returns vnet_response_collection List Virtual Networks response
     * @throws ApiError
     */
    public tunnelVirtualNetworkListVirtualNetworks({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<vnet_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/teamnet/virtual_networks',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Virtual Network
     * Add a new virtual network to the account.
     * @returns vnet_response_single Create Virtual Network response
     * @throws ApiError
     */
    public tunnelVirtualNetworkCreateVirtualNetwork({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            comment?: schemas_comment;
            is_default?: is_default_network;
            name: vnet_name;
        },
    }): CancelablePromise<vnet_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/teamnet/virtual_networks',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Virtual Network
     * Delete an existing virtual network from the account.
     * @returns vnet_response_single Delete Virtual Network response
     * @throws ApiError
     */
    public tunnelVirtualNetworkDeleteVirtualNetwork({
        vnetId,
        accountIdentifier,
        requestBody,
    }: {
        vnetId: vnet_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<vnet_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/teamnet/virtual_networks/{vnet_id}',
            path: {
                'vnet_id': vnetId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update Virtual Network
     * Update an existing virtual network in the account.
     * @returns vnet_response_single Update Virtual Network response
     * @throws ApiError
     */
    public tunnelVirtualNetworkUpdateVirtualNetwork({
        vnetId,
        accountIdentifier,
        requestBody,
    }: {
        vnetId: vnet_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            comment?: schemas_comment;
            is_default_network?: is_default_network;
            name?: vnet_name;
        },
    }): CancelablePromise<vnet_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/teamnet/virtual_networks/{vnet_id}',
            path: {
                'vnet_id': vnetId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
