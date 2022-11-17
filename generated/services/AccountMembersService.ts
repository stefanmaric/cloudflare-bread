/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account_identifier } from '../models/account_identifier';
import type { api_response_single_id } from '../models/api_response_single_id';
import type { create } from '../models/create';
import type { response_collection } from '../models/response_collection';
import type { response_single } from '../models/response_single';
import type { schemas_identifier } from '../models/schemas_identifier';
import type { schemas_member } from '../models/schemas_member';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountMembersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Members
     * List all members of an account.
     * @returns response_collection List Members response
     * @throws ApiError
     */
    public accountMembersListMembers({
        accountIdentifier,
    }: {
        accountIdentifier: account_identifier,
    }): CancelablePromise<response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/members',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Add Member
     * Add a user to the list of members for this account.
     * @returns response_single Add Member response
     * @throws ApiError
     */
    public accountMembersAddMember({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: account_identifier,
        requestBody: create,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/members',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove Member
     * Remove a member from an account.
     * @returns api_response_single_id Remove Member response
     * @throws ApiError
     */
    public accountMembersRemoveMember({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        accountIdentifier: account_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/members/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Member Details
     * Get information about a specific member of an account.
     * @returns response_single Member Details response
     * @throws ApiError
     */
    public accountMembersMemberDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: schemas_identifier,
        accountIdentifier: account_identifier,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/members/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Member
     * Modify an account member.
     * @returns response_single Update Member response
     * @throws ApiError
     */
    public accountMembersUpdateMember({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        accountIdentifier: account_identifier,
        requestBody: schemas_member,
    }): CancelablePromise<response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/members/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
