/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { railgun_components_schemas_identifier_2 } from '../models/railgun_components_schemas_identifier_2';
import type { railgun_response_single } from '../models/railgun_response_single';
import type { schemas_railgun_response_collection } from '../models/schemas_railgun_response_collection';
import type { test_connection_response } from '../models/test_connection_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RailgunConnectionsForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List available Railguns
     * A list of available Railguns the zone can use.
     * @returns schemas_railgun_response_collection List available Railguns response
     * @throws ApiError
     */
    public railgunConnectionsForAZoneListAvailableRailguns({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_railgun_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/railguns',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Railgun details
     * Lists details about a specific Railgun.
     * @returns railgun_response_single Railgun details response
     * @throws ApiError
     */
    public railgunConnectionsForAZoneRailgunDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: railgun_components_schemas_identifier_2,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Connect or disconnect a Railgun
     * Connect or disconnect a Railgun.
     * @returns railgun_response_single Connect or disconnect a Railgun response
     * @throws ApiError
     */
    public railgunConnectionsForAZoneConnectOrDisconnectARailgun({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: railgun_components_schemas_identifier_2,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Test Railgun connection
     * Tests the Railgun connection to the zone.
     * @returns test_connection_response Test Railgun connection response
     * @throws ApiError
     */
    public railgunConnectionsForAZoneTestRailgunConnection({
        identifier,
        zoneIdentifier,
    }: {
        identifier: railgun_components_schemas_identifier_2,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<test_connection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/railguns/{identifier}/diagnose',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
