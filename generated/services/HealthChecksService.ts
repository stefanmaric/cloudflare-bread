/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { healthchecks_components_schemas_id_response } from '../models/healthchecks_components_schemas_id_response';
import type { healthchecks_components_schemas_identifier } from '../models/healthchecks_components_schemas_identifier';
import type { healthchecks_components_schemas_response_collection } from '../models/healthchecks_components_schemas_response_collection';
import type { healthchecks_components_schemas_single_response } from '../models/healthchecks_components_schemas_single_response';
import type { query_healthcheck } from '../models/query_healthcheck';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HealthChecksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Health Checks
     * List configured health checks.
     * @returns healthchecks_components_schemas_response_collection List Health Checks response
     * @throws ApiError
     */
    public healthChecksListHealthChecks({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<healthchecks_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/healthchecks',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create Health Check
     * Create a new health check.
     * @returns healthchecks_components_schemas_single_response Create Health Check response
     * @throws ApiError
     */
    public healthChecksCreateHealthCheck({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_healthcheck,
    }): CancelablePromise<healthchecks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/healthchecks',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create Preview Health Check
     * Create a new preview health check.
     * @returns healthchecks_components_schemas_single_response Create Preview Health Check response
     * @throws ApiError
     */
    public healthChecksCreatePreviewHealthCheck({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_healthcheck,
    }): CancelablePromise<healthchecks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/healthchecks/preview',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Preview Health Check
     * Delete a health check.
     * @returns healthchecks_components_schemas_id_response Delete Preview Health Check response
     * @throws ApiError
     */
    public healthChecksDeletePreviewHealthCheck({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: healthchecks_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<healthchecks_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/healthchecks/preview/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Health Check Preview Details
     * Fetch a single configured health check preview.
     * @returns healthchecks_components_schemas_single_response Health Check Preview Details response
     * @throws ApiError
     */
    public healthChecksHealthCheckPreviewDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: healthchecks_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<healthchecks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/healthchecks/preview/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Delete Health Check
     * Delete a health check.
     * @returns healthchecks_components_schemas_id_response Delete Health Check response
     * @throws ApiError
     */
    public healthChecksDeleteHealthCheck({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: healthchecks_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<healthchecks_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/healthchecks/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Health Check Details
     * Fetch a single configured health check.
     * @returns healthchecks_components_schemas_single_response Health Check Details response
     * @throws ApiError
     */
    public healthChecksHealthCheckDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: healthchecks_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<healthchecks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/healthchecks/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Patch Health Check
     * Patch a configured health check.
     * @returns healthchecks_components_schemas_single_response Patch Health Check response
     * @throws ApiError
     */
    public healthChecksPatchHealthCheck({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: healthchecks_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_healthcheck,
    }): CancelablePromise<healthchecks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/healthchecks/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Health Check
     * Update a configured health check.
     * @returns healthchecks_components_schemas_single_response Update Health Check response
     * @throws ApiError
     */
    public healthChecksUpdateHealthCheck({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: healthchecks_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: query_healthcheck,
    }): CancelablePromise<healthchecks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/healthchecks/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
