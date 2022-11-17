/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { ssl_universal_settings_response } from '../models/ssl_universal_settings_response';
import type { universal } from '../models/universal';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UniversalSslSettingsForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Universal SSL Settings Details
     * Get Universal SSL Settings for a Zone.
     * @returns ssl_universal_settings_response Universal SSL Settings Details response
     * @throws ApiError
     */
    public universalSslSettingsForAZoneUniversalSslSettingsDetails({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<ssl_universal_settings_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/ssl/universal/settings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit Universal SSL Settings
     * Patch Universal SSL Settings for a Zone.
     * @returns ssl_universal_settings_response Edit Universal SSL Settings response
     * @throws ApiError
     */
    public universalSslSettingsForAZoneEditUniversalSslSettings({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: universal,
    }): CancelablePromise<ssl_universal_settings_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/ssl/universal/settings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
