/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { organizations_components_schemas_identifier } from '../models/organizations_components_schemas_identifier';
import type { organizations_components_schemas_single_response } from '../models/organizations_components_schemas_single_response';
import type { schemas_empty_response } from '../models/schemas_empty_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneLevelZeroTrustOrganizationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get your Zero Trust organization
     * Returns the configuration for your Zero Trust organization.
     * @returns organizations_components_schemas_single_response Get your Zero Trust organization response
     * @throws ApiError
     */
    public zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization({
        identifier,
    }: {
        identifier: organizations_components_schemas_identifier,
    }): CancelablePromise<organizations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/organizations',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create your Zero Trust organization
     * Sets up a Zero Trust organization for your account.
     * @returns organizations_components_schemas_single_response Create your Zero Trust organization response
     * @throws ApiError
     */
    public zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization({
        identifier,
        requestBody,
    }: {
        identifier: organizations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<organizations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/access/organizations',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update your Zero Trust organization
     * Updates the configuration for your Zero Trust organization.
     * @returns organizations_components_schemas_single_response Update your Zero Trust organization response
     * @throws ApiError
     */
    public zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization({
        identifier,
        requestBody,
    }: {
        identifier: organizations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<organizations_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier}/access/organizations',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke all Access tokens for a user
     * Revokes a user's access across all applications.
     * @returns schemas_empty_response Revoke all Access tokens for a user response
     * @throws ApiError
     */
    public zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser({
        identifier,
        requestBody,
    }: {
        identifier: organizations_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_empty_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/access/organizations/revoke_user',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
