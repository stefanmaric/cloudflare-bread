/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { fallback_origin_response } from '../models/fallback_origin_response';
import type { origin } from '../models/origin';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomHostnameFallbackOriginForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete Fallback Origin for Custom Hostnames
     * @returns fallback_origin_response Delete Fallback Origin for Custom Hostnames response
     * @throws ApiError
     */
    public customHostnameFallbackOriginForAZoneDeleteFallbackOriginForCustomHostnames({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<fallback_origin_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/custom_hostnames/fallback_origin',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Fallback Origin for Custom Hostnames
     * @returns fallback_origin_response Get Fallback Origin for Custom Hostnames response
     * @throws ApiError
     */
    public customHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnames({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<fallback_origin_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_hostnames/fallback_origin',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update Fallback Origin for Custom Hostnames
     * @returns fallback_origin_response Update Fallback Origin for Custom Hostnames response
     * @throws ApiError
     */
    public customHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnames({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            origin: origin;
        },
    }): CancelablePromise<fallback_origin_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/custom_hostnames/fallback_origin',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
