/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { railgun_components_schemas_identifier } from '../models/railgun_components_schemas_identifier';
import type { railgun_components_schemas_name } from '../models/railgun_components_schemas_name';
import type { railgun_response_collection } from '../models/railgun_response_collection';
import type { railgun_response_single } from '../models/railgun_response_single';
import type { railgun_response_single_id } from '../models/railgun_response_single_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RailgunService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Railguns
     * List, search, sort and filter your Railguns.
     * @returns railgun_response_collection List Railguns response
     * @throws ApiError
     */
    public railgunListRailguns(): CancelablePromise<railgun_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/railguns',
        });
    }

    /**
     * Create Railgun
     * @returns railgun_response_single Create Railgun response
     * @throws ApiError
     */
    public railgunCreateRailgun({
        requestBody,
    }: {
        requestBody: {
            name: railgun_components_schemas_name;
        },
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/railguns',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Railgun
     * Disable and delete a Railgun. This will immediately disable that Railgun for any connected zones.
     * @returns railgun_response_single_id Delete a Railgun response
     * @throws ApiError
     */
    public railgunDeleteARailgun({
        identifier,
        requestBody,
    }: {
        identifier: railgun_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<railgun_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/railguns/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Railgun details
     * @returns railgun_response_single Railgun details response
     * @throws ApiError
     */
    public railgunRailgunDetails({
        identifier,
    }: {
        identifier: railgun_components_schemas_identifier,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/railguns/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Enable or disable a Railgun
     * Enable or disable a Railgun for all zones connected to it.
     * @returns railgun_response_single Enable or disable a Railgun response
     * @throws ApiError
     */
    public railgunEnableOrDisableARailgun({
        identifier,
        requestBody,
    }: {
        identifier: railgun_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/railguns/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Railgun zones
     * List the zones that are currently using this Railgun.
     * @returns any List Railgun zones response
     * @throws ApiError
     */
    public railgunListRailgunZones({
        identifier,
    }: {
        identifier: railgun_components_schemas_identifier,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/railguns/{identifier}/zones',
            path: {
                'identifier': identifier,
            },
        });
    }

}
