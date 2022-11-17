/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { create_destination_address_properties } from '../models/create_destination_address_properties';
import type { destination_address_identifier } from '../models/destination_address_identifier';
import type { destination_address_response_single } from '../models/destination_address_response_single';
import type { destination_addresses_response_collection } from '../models/destination_addresses_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmailRoutingDestinationAddressesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List destination addresses
     * Lists existing destination addresses.
     * @returns destination_addresses_response_collection List destination addresses response
     * @throws ApiError
     */
    public emailRoutingDestinationAddressesListDestinationAddresses({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<destination_addresses_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/email/routing/addresses',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create a destination address
     * Create a destination address to forward your emails to. Destination addresses need to be verified before they can be used.
     * @returns destination_address_response_single Create a destination address response
     * @throws ApiError
     */
    public emailRoutingDestinationAddressesCreateADestinationAddress({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: create_destination_address_properties,
    }): CancelablePromise<destination_address_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/email/routing/addresses',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete destination address
     * Deletes a specific destination address.
     * @returns destination_address_response_single Delete destination address response
     * @throws ApiError
     */
    public emailRoutingDestinationAddressesDeleteDestinationAddress({
        destinationAddressIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        destinationAddressIdentifier: destination_address_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<destination_address_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}',
            path: {
                'destination_address_identifier': destinationAddressIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a destination address
     * Gets information for a specific destination email already created.
     * @returns destination_address_response_single Get a destination address response
     * @throws ApiError
     */
    public emailRoutingDestinationAddressesGetADestinationAddress({
        destinationAddressIdentifier,
        accountIdentifier,
    }: {
        destinationAddressIdentifier: destination_address_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<destination_address_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}',
            path: {
                'destination_address_identifier': destinationAddressIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
