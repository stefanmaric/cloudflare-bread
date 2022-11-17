/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { collection_response } from '../models/collection_response';
import type { collection_response_paginated } from '../models/collection_response_paginated';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { default_response } from '../models/default_response';
import type { endpoint } from '../models/endpoint';
import type { host } from '../models/host';
import type { method } from '../models/method';
import type { operation_id } from '../models/operation_id';
import type { schema_response_discovery } from '../models/schema_response_discovery';
import type { schema_response_with_thresholds } from '../models/schema_response_with_thresholds';
import type { schemas_single_response } from '../models/schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApiShieldEndpointManagementService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve API Discovery results for a zone
     * Retrieve the most up to date view of API Discovery on a zone.
     * @returns schema_response_discovery Retrieve API Discovery results for a zone response
     * @throws ApiError
     */
    public apiShieldEndpointManagementRetrieveApiDiscoveryResultsForAZone({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<schema_response_discovery> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/api_gateway/discovery',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Retrieve information about all operations on a zone
     * @returns collection_response_paginated Retrieve information about all operations on a zone response
     * @throws ApiError
     */
    public apiShieldEndpointManagementRetrieveInformationAboutAllOperationsOnAZone({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<collection_response_paginated> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/api_gateway/operations',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Add operations to a zone
     * Add one or more operations to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.
     * @returns collection_response Add operations to a zone response
     * @throws ApiError
     */
    public apiShieldEndpointManagementAddOperationsToAZone({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: Array<{
            endpoint?: endpoint;
            host?: host;
            method?: method;
        }>,
    }): CancelablePromise<collection_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_id}/api_gateway/operations',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an operation
     * @returns default_response Delete an operation response
     * @throws ApiError
     */
    public apiShieldEndpointManagementDeleteAnOperation({
        operationId,
        zoneId,
        requestBody,
    }: {
        operationId: operation_id,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<default_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_id}/api_gateway/operations/{operation_id}',
            path: {
                'operation_id': operationId,
                'zone_id': zoneId,
            },
            body: requestBody,
        });
    }

    /**
     * Retrieve information about an operation
     * @returns schemas_single_response Retrieve information about an operation response
     * @throws ApiError
     */
    public apiShieldEndpointManagementRetrieveInformationAboutAnOperation({
        operationId,
        zoneId,
    }: {
        operationId: operation_id,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/api_gateway/operations/{operation_id}',
            path: {
                'operation_id': operationId,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Retrieve operations and features as OpenAPI schemas
     * @returns schema_response_with_thresholds Retrieve operations and features as OpenAPI schemas response
     * @throws ApiError
     */
    public apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenApiSchemas({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<schema_response_with_thresholds> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/api_gateway/schemas',
            path: {
                'zone_id': zoneId,
            },
        });
    }

}
