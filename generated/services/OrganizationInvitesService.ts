/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { collection_invite_response } from '../models/collection_invite_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_name } from '../models/components_schemas_name';
import type { description } from '../models/description';
import type { invite_components_schemas_identifier } from '../models/invite_components_schemas_identifier';
import type { invited_member_email } from '../models/invited_member_email';
import type { role_components_schemas_identifier } from '../models/role_components_schemas_identifier';
import type { schemas_permissions } from '../models/schemas_permissions';
import type { single_invite_response } from '../models/single_invite_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationInvitesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Invitations
     * List all invitations associated with an organization.
     * @returns collection_invite_response List Invitations response
     * @throws ApiError
     */
    public organizationInvitesListInvitations({
        organizationIdentifier,
    }: {
        organizationIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<collection_invite_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/invites',
            path: {
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Create Invitation
     * Invite a User to become a Member of an Organization.
     * @returns single_invite_response Create Invitation response
     * @throws ApiError
     */
    public organizationInvitesCreateInvitation({
        organizationIdentifier,
        requestBody,
    }: {
        organizationIdentifier: common_components_schemas_identifier,
        requestBody: {
            /**
             * When present and set to true, allows for the invited user to be automatically accepted to the organization. No invitation is sent.
             */
            auto_accept?: boolean;
            invited_member_email: invited_member_email;
            /**
             * Array of Roles associated with the invited user.
             */
            roles: Array<{
                description?: description;
                id: role_components_schemas_identifier;
                name?: components_schemas_name;
                permissions?: schemas_permissions;
            }>;
        },
    }): CancelablePromise<single_invite_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{organization_identifier}/invites',
            path: {
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Cancel Invitation
     * Cancel an existing invitation.
     * @returns any Cancel Invitation response
     * @throws ApiError
     */
    public organizationInvitesCancelInvitation({
        identifier,
        organizationIdentifier,
        requestBody,
    }: {
        identifier: invite_components_schemas_identifier,
        organizationIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{organization_identifier}/invites/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * @deprecated
     * Invitation Details
     * Get the details of an invitation.
     * @returns single_invite_response Invitation Details response
     * @throws ApiError
     */
    public organizationInvitesInvitationDetails({
        identifier,
        organizationIdentifier,
    }: {
        identifier: invite_components_schemas_identifier,
        organizationIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<single_invite_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/invites/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Edit Invitation Roles
     * Change the Roles of a Pending Invite.
     * @returns single_invite_response Edit Invitation Roles response
     * @throws ApiError
     */
    public organizationInvitesEditInvitationRoles({
        identifier,
        organizationIdentifier,
        requestBody,
    }: {
        identifier: invite_components_schemas_identifier,
        organizationIdentifier: common_components_schemas_identifier,
        requestBody: {
            /**
             * Array of Roles associated with the invited user.
             */
            roles?: Array<role_components_schemas_identifier>;
        },
    }): CancelablePromise<single_invite_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{organization_identifier}/invites/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
