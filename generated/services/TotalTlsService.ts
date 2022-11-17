/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { total_tls_settings_response } from '../models/total_tls_settings_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TotalTlsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Total TLS Settings Details
     * Get Total TLS Settings for a Zone.
     * @returns total_tls_settings_response Total TLS Settings Details response
     * @throws ApiError
     */
    public totalTlsTotalTlsSettingsDetails({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<total_tls_settings_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/acm/total_tls',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Enable or Disable Total TLS
     * Set Total TLS Settings or disable the feature for a Zone.
     * @returns total_tls_settings_response Enable or Disable Total TLS response
     * @throws ApiError
     */
    public totalTlsEnableOrDisableTotalTls({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<total_tls_settings_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/acm/total_tls',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
