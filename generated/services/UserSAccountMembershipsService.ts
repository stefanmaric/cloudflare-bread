/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { collection_membership_response } from '../models/collection_membership_response';
import type { membership_components_schemas_identifier } from '../models/membership_components_schemas_identifier';
import type { single_membership_response } from '../models/single_membership_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserSAccountMembershipsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Memberships
     * List memberships of accounts the user can access.
     * @returns collection_membership_response List Memberships response
     * @throws ApiError
     */
    public userSAccountMembershipsListMemberships(): CancelablePromise<collection_membership_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/memberships',
        });
    }

    /**
     * Delete Membership
     * Remove the associated member from an account.
     * @returns any Delete Membership response
     * @throws ApiError
     */
    public userSAccountMembershipsDeleteMembership({
        identifier,
        requestBody,
    }: {
        identifier: membership_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(api_response_single & {
        result?: any;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/memberships/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Membership Details
     * Get a specific membership.
     * @returns single_membership_response Membership Details response
     * @throws ApiError
     */
    public userSAccountMembershipsMembershipDetails({
        identifier,
    }: {
        identifier: membership_components_schemas_identifier,
    }): CancelablePromise<single_membership_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/memberships/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Membership
     * Accept or reject this account invitation.
     * @returns single_membership_response Update Membership response
     * @throws ApiError
     */
    public userSAccountMembershipsUpdateMembership({
        identifier,
        requestBody,
    }: {
        identifier: membership_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<single_membership_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/memberships/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
