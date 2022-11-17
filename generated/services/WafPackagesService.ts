/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { action_mode } from '../models/action_mode';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { package_components_schemas_identifier } from '../models/package_components_schemas_identifier';
import type { package_response_collection } from '../models/package_response_collection';
import type { package_response_single } from '../models/package_response_single';
import type { sensitivity } from '../models/sensitivity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WafPackagesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List WAF packages
     * Fetches WAF packages for a zone.
     * @returns package_response_collection List WAF packages response
     * @throws ApiError
     */
    public wafPackagesListWafPackages({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<package_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/waf/packages',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Get a WAF package
     * Fetches the details of a WAF package.
     * @returns package_response_single Get a WAF package response
     * @throws ApiError
     */
    public wafPackagesGetAWafPackage({
        identifier,
        zoneIdentifier,
    }: {
        identifier: package_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<package_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/firewall/waf/packages/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update a WAF package
     * Updates a WAF package. You can update the sensitivity and the action of an anomaly detection WAF package.
     * @returns any Update a WAF package response
     * @throws ApiError
     */
    public wafPackagesUpdateAWafPackage({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: package_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            action_mode?: action_mode;
            sensitivity?: sensitivity;
        },
    }): CancelablePromise<package_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/firewall/waf/packages/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
