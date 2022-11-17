/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { collection_role_response } from '../models/collection_role_response';
import type { organization_components_schemas_identifier } from '../models/organization_components_schemas_identifier';
import type { role_components_schemas_identifier } from '../models/role_components_schemas_identifier';
import type { single_role_response } from '../models/single_role_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationRolesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Roles
     * Get all available roles for an organization.
     * @returns collection_role_response List Roles response
     * @throws ApiError
     */
    public organizationRolesListRoles({
        organizationIdentifier,
    }: {
        organizationIdentifier: organization_components_schemas_identifier,
    }): CancelablePromise<collection_role_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/roles',
            path: {
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Role Details
     * Get information about a specific role for an organization.
     * @returns single_role_response Role Details response
     * @throws ApiError
     */
    public organizationRolesRoleDetails({
        identifier,
        organizationIdentifier,
    }: {
        identifier: role_components_schemas_identifier,
        organizationIdentifier: organization_components_schemas_identifier,
    }): CancelablePromise<single_role_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/roles/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
        });
    }

}
