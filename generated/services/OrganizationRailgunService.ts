/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { railgun_components_schemas_identifier } from '../models/railgun_components_schemas_identifier';
import type { railgun_components_schemas_name } from '../models/railgun_components_schemas_name';
import type { railgun_response_collection } from '../models/railgun_response_collection';
import type { railgun_response_single } from '../models/railgun_response_single';
import type { railgun_response_single_id } from '../models/railgun_response_single_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationRailgunService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Railguns
     * List, search, sort and filter your Railguns.
     * @returns railgun_response_collection List Railguns response
     * @throws ApiError
     */
    public organizationRailgunListRailguns({
        organizationIdentifier,
    }: {
        organizationIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<railgun_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/railguns',
            path: {
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Create Railgun
     * @returns railgun_response_single Create Railgun response
     * @throws ApiError
     */
    public organizationRailgunCreateRailgun({
        organizationIdentifier,
        requestBody,
    }: {
        organizationIdentifier: common_components_schemas_identifier,
        requestBody: {
            name: railgun_components_schemas_name;
        },
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{organization_identifier}/railguns',
            path: {
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Delete Railgun
     * Disable and delete a Railgun. This will immediately disable the Railgun for any connected zones.
     * @returns railgun_response_single_id Delete Railgun response
     * @throws ApiError
     */
    public organizationRailgunDeleteRailgun({
        identifier,
        organizationIdentifier,
        requestBody,
    }: {
        identifier: railgun_components_schemas_identifier,
        organizationIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<railgun_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{organization_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * @deprecated
     * Railgun details
     * @returns railgun_response_single Railgun details response
     * @throws ApiError
     */
    public organizationRailgunRailgunDetails({
        identifier,
        organizationIdentifier,
    }: {
        identifier: railgun_components_schemas_identifier,
        organizationIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Enable or disable a Railgun
     * Enable or disable a Railgun for all zones connected to it.
     * @returns railgun_response_single Enable or disable a Railgun response
     * @throws ApiError
     */
    public organizationRailgunEnableOrDisableARailgun({
        identifier,
        organizationIdentifier,
        requestBody,
    }: {
        identifier: railgun_components_schemas_identifier,
        organizationIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/organizations/{organization_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @deprecated
     * Get Railgun zones
     * Lists the zones that are currently using this Railgun.
     * @returns any Get Railgun zones response
     * @throws ApiError
     */
    public organizationRailgunGetRailgunZones({
        identifier,
        organizationIdentifier,
    }: {
        identifier: railgun_components_schemas_identifier,
        organizationIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{organization_identifier}/railguns/{identifier}/zones',
            path: {
                'identifier': identifier,
                'organization_identifier': organizationIdentifier,
            },
        });
    }

}
