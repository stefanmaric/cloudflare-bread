/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { collection_organization_response } from '../models/collection_organization_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { single_organization_response } from '../models/single_organization_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserSOrganizationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Organizations
     * Lists organizations the user is associated with.
     * @returns collection_organization_response List Organizations response
     * @throws ApiError
     */
    public userSOrganizationsListOrganizations(): CancelablePromise<collection_organization_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/organizations',
        });
    }

    /**
     * Leave Organization
     * Removes association to an organization.
     * @returns any Leave Organization response
     * @throws ApiError
     */
    public userSOrganizationsLeaveOrganization({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<{
        id?: common_components_schemas_identifier;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/organizations/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Organization Details
     * Gets a specific organization the user is associated with.
     * @returns single_organization_response Organization Details response
     * @throws ApiError
     */
    public userSOrganizationsOrganizationDetails({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<single_organization_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/organizations/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

}
