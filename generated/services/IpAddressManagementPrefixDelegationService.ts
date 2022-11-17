/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { delegation_identifier } from '../models/delegation_identifier';
import type { ipam_delegations_components_schemas_id_response } from '../models/ipam_delegations_components_schemas_id_response';
import type { ipam_delegations_components_schemas_response_collection } from '../models/ipam_delegations_components_schemas_response_collection';
import type { ipam_delegations_components_schemas_single_response } from '../models/ipam_delegations_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpAddressManagementPrefixDelegationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Prefix Delegations
     * List all delegations for a given account IP prefix.
     * @returns ipam_delegations_components_schemas_response_collection List Prefix Delegations response
     * @throws ApiError
     */
    public ipAddressManagementPrefixDelegationListPrefixDelegations({
        prefixIdentifier,
        accountIdentifier,
    }: {
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<ipam_delegations_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations',
            path: {
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Prefix Delegation
     * Create a new account delegation for a given IP prefix.
     * @returns ipam_delegations_components_schemas_single_response Create Prefix Delegation response
     * @throws ApiError
     */
    public ipAddressManagementPrefixDelegationCreatePrefixDelegation({
        prefixIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ipam_delegations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations',
            path: {
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Prefix Delegation
     * Delete an account delegation for a given IP prefix.
     * @returns ipam_delegations_components_schemas_id_response Delete Prefix Delegation response
     * @throws ApiError
     */
    public ipAddressManagementPrefixDelegationDeletePrefixDelegation({
        delegationIdentifier,
        prefixIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        delegationIdentifier: delegation_identifier,
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ipam_delegations_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations/{delegation_identifier}',
            path: {
                'delegation_identifier': delegationIdentifier,
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
