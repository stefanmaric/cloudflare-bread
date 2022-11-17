/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_name } from '../models/schemas_name';
import type { single_organization_response } from '../models/single_organization_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationsDeprecatedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * Organization Details
     * Get information about a specific organization that you are a member of.
     * @returns single_organization_response Organization Details response
     * @throws ApiError
     */
    public organizationsDeprecatedOrganizationDetails({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<single_organization_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * @deprecated
     * Edit Organization
     * Update an existing Organization.
     * @returns single_organization_response Edit Organization response
     * @throws ApiError
     */
    public organizationsDeprecatedEditOrganization({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: {
            name?: schemas_name;
        },
    }): CancelablePromise<single_organization_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
