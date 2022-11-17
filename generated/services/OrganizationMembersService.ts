/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { collection_member_response } from '../models/collection_member_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { organization_components_schemas_identifier } from '../models/organization_components_schemas_identifier';
import type { role_components_schemas_identifier } from '../models/role_components_schemas_identifier';
import type { single_member_response } from '../models/single_member_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationMembersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Members
     * List all members of a organization.
     * @returns collection_member_response List Members response
     * @throws ApiError
     */
    public organizationMembersListMembers({
        organizationIdentifier,
    }: {
        organizationIdentifier: organization_components_schemas_identifier,
    }): CancelablePromise<collection_member_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/members',
            path: {
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Remove Member
     * Remove a member from an organization.
     * @returns any Remove Member response
     * @throws ApiError
     */
    public organizationMembersRemoveMember({
        identifier,
        organizationIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        organizationIdentifier: organization_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{organization_identifier}/members/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * @deprecated
     * Member Details
     * Get information about a specific member of an organization.
     * @returns single_member_response Member Details response
     * @throws ApiError
     */
    public organizationMembersMemberDetails({
        identifier,
        organizationIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        organizationIdentifier: organization_components_schemas_identifier,
    }): CancelablePromise<single_member_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/members/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Edit Member Roles
     * Change the Roles of an Organization's Member.
     * @returns single_member_response Edit Member Roles response
     * @throws ApiError
     */
    public organizationMembersEditMemberRoles({
        identifier,
        organizationIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        organizationIdentifier: organization_components_schemas_identifier,
        requestBody: {
            /**
             * Array of Roles associated with this Member.
             */
            roles?: Array<role_components_schemas_identifier>;
        },
    }): CancelablePromise<single_member_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{organization_identifier}/members/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
