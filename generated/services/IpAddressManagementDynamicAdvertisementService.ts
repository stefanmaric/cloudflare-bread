/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { advertised_response } from '../models/advertised_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpAddressManagementDynamicAdvertisementService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Advertisement Status
     * List the current advertisement state for a prefix.
     * @returns advertised_response Get Advertisement Status response
     * @throws ApiError
     */
    public ipAddressManagementDynamicAdvertisementGetAdvertisementStatus({
        prefixIdentifier,
        accountIdentifier,
    }: {
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<advertised_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/status',
            path: {
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Prefix Dynamic Advertisement Status
     * Advertise or withdraw BGP route for a prefix.
     * @returns advertised_response Update Prefix Dynamic Advertisement Status response
     * @throws ApiError
     */
    public ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus({
        prefixIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<advertised_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/status',
            path: {
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
