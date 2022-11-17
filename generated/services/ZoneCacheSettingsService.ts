/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { cache_reserve_response_value } from '../models/cache_reserve_response_value';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { variants_response_value } from '../models/variants_response_value';
import type { zone_cache_settings_response_single } from '../models/zone_cache_settings_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneCacheSettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Cache Reserve setting
     * Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.
     * @returns any Get Cache Reserve setting response
     * @throws ApiError
     */
    public zoneCacheSettingsGetCacheReserveSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(zone_cache_settings_response_single & cache_reserve_response_value)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/cache/cache_reserve',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change Cache Reserve setting
     * Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.
     * @returns any Change Cache Reserve setting response
     * @throws ApiError
     */
    public zoneCacheSettingsChangeCacheReserveSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(zone_cache_settings_response_single & cache_reserve_response_value)> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/cache/cache_reserve',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete variants setting
     * Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
     * @returns any Delete variants setting response
     * @throws ApiError
     */
    public zoneCacheSettingsDeleteVariantsSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<zone_cache_settings_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/cache/variants',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get variants setting
     * Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
     * @returns any Get variants setting response
     * @throws ApiError
     */
    public zoneCacheSettingsGetVariantsSetting({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(zone_cache_settings_response_single & variants_response_value)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/cache/variants',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Change variants setting
     * Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
     * @returns any Change variants setting response
     * @throws ApiError
     */
    public zoneCacheSettingsChangeVariantsSetting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<(zone_cache_settings_response_single & variants_response_value)> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/cache/variants',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
