/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { address_maps_components_schemas_response_collection } from '../models/address_maps_components_schemas_response_collection';
import type { address_maps_components_schemas_single_response } from '../models/address_maps_components_schemas_single_response';
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { full_response } from '../models/full_response';
import type { ip_address } from '../models/ip_address';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpAddressManagementAddressMapsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Remove an account membership from an Address Map
     * Remove an account as a member of a particular address map.
     * @returns api_response_collection Remove an account membership from an Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsRemoveAnAccountMembershipFromAnAddressMap({
        accountIdentifier,
        addressMapIdentifier,
        accountIdentifier1,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier1: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier1}/addressing/address_maps/{address_map_identifier}/accounts/{account_identifier}',
            path: {
                'account_identifier': accountIdentifier,
                'address_map_identifier': addressMapIdentifier,
                'account_identifier1': accountIdentifier1,
            },
            body: requestBody,
        });
    }

    /**
     * Add an account membership to an Address Map
     * Add an account as a member of a particular address map.
     * @returns api_response_collection Add an account membership to an Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsAddAnAccountMembershipToAnAddressMap({
        accountIdentifier,
        addressMapIdentifier,
        accountIdentifier1,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier1: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier1}/addressing/address_maps/{address_map_identifier}/accounts/{account_identifier}',
            path: {
                'account_identifier': accountIdentifier,
                'address_map_identifier': addressMapIdentifier,
                'account_identifier1': accountIdentifier1,
            },
            body: requestBody,
        });
    }

    /**
     * List Address Maps
     * List all address maps owned by the account.
     * @returns address_maps_components_schemas_response_collection List Address Maps response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsListAddressMaps({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<address_maps_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/addressing/address_maps',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Address Map
     * Create a new address map under the account.
     * @returns full_response Create Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsCreateAddressMap({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<full_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/addressing/address_maps',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Address Map
     * Delete a particular address map owned by the account.
     * @returns api_response_collection Delete Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsDeleteAddressMap({
        addressMapIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}',
            path: {
                'address_map_identifier': addressMapIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Address Map Details
     * Show a particular address map owned by the account.
     * @returns full_response Address Map Details response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsAddressMapDetails({
        addressMapIdentifier,
        accountIdentifier,
    }: {
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<full_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}',
            path: {
                'address_map_identifier': addressMapIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Address Map
     * Modify the description or default SNI for an address map owned by the account.
     * @returns address_maps_components_schemas_single_response Update Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsUpdateAddressMap({
        addressMapIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<address_maps_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}',
            path: {
                'address_map_identifier': addressMapIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove an IP from an Address Map
     * Remove an IP from a particular address map.
     * @returns api_response_collection Remove an IP from an Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsRemoveAnIpFromAnAddressMap({
        ipAddress,
        addressMapIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        ipAddress: ip_address,
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/ips/{ip_address}',
            path: {
                'ip_address': ipAddress,
                'address_map_identifier': addressMapIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Add an IP to an Address Map
     * Add an IP from a prefix owned by the account to a particular address map.
     * @returns api_response_collection Add an IP to an Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsAddAnIpToAnAddressMap({
        ipAddress,
        addressMapIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        ipAddress: ip_address,
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/ips/{ip_address}',
            path: {
                'ip_address': ipAddress,
                'address_map_identifier': addressMapIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Remove a zone membership from an Address Map
     * Remove a zone as a member of a particular address map.
     * @returns api_response_collection Remove a zone membership from an Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsRemoveAZoneMembershipFromAnAddressMap({
        zoneIdentifier,
        addressMapIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/zones/{zone_identifier}',
            path: {
                'zone_identifier': zoneIdentifier,
                'address_map_identifier': addressMapIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Add a zone membership to an Address Map
     * Add a zone as a member of a particular address map.
     * @returns api_response_collection Add a zone membership to an Address Map response
     * @throws ApiError
     */
    public ipAddressManagementAddressMapsAddAZoneMembershipToAnAddressMap({
        zoneIdentifier,
        addressMapIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        addressMapIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/zones/{zone_identifier}',
            path: {
                'zone_identifier': zoneIdentifier,
                'address_map_identifier': addressMapIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
