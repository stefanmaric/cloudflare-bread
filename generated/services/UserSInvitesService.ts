/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invite_components_schemas_identifier } from '../models/invite_components_schemas_identifier';
import type { schemas_collection_invite_response } from '../models/schemas_collection_invite_response';
import type { single_invite_response } from '../models/single_invite_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserSInvitesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Invitations
     * Lists all invitations associated with my user.
     * @returns schemas_collection_invite_response List Invitations response
     * @throws ApiError
     */
    public userSInvitesListInvitations(): CancelablePromise<schemas_collection_invite_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/invites',
        });
    }

    /**
     * Invitation Details
     * Gets the details of an invitation.
     * @returns single_invite_response Invitation Details response
     * @throws ApiError
     */
    public userSInvitesInvitationDetails({
        identifier,
    }: {
        identifier: invite_components_schemas_identifier,
    }): CancelablePromise<single_invite_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/invites/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Respond to Invitation
     * Responds to an invitation.
     * @returns single_invite_response Respond to Invitation response
     * @throws ApiError
     */
    public userSInvitesRespondToInvitation({
        identifier,
        requestBody,
    }: {
        identifier: invite_components_schemas_identifier,
        requestBody: {
            /**
             * Status of your response to the invitation (rejected or accepted).
             */
            status: 'accepted' | 'rejected';
        },
    }): CancelablePromise<single_invite_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/invites/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
