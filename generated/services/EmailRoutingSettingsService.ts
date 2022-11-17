/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { dns_settings_response_collection } from '../models/dns_settings_response_collection';
import type { email_settings_response_single } from '../models/email_settings_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmailRoutingSettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Email Routing settings
     * Get information about the settings for your Email Routing zone.
     * @returns email_settings_response_single Get Email Routing settings response
     * @throws ApiError
     */
    public emailRoutingSettingsGetEmailRoutingSettings({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<email_settings_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/email/routing',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Disable Email Routing
     * Disable your Email Routing zone. Also removes additional MX records previously required for Email Routing to work.
     * @returns email_settings_response_single Disable Email Routing response
     * @throws ApiError
     */
    public emailRoutingSettingsDisableEmailRouting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<email_settings_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/email/routing/disable',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Email Routing - DNS settings
     * Show the DNS records needed to configure your Email Routing zone.
     * @returns dns_settings_response_collection Email Routing - DNS settings response
     * @throws ApiError
     */
    public emailRoutingSettingsEmailRoutingDnsSettings({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<dns_settings_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/email/routing/dns',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Enable Email Routing
     * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
     * @returns email_settings_response_single Enable Email Routing response
     * @throws ApiError
     */
    public emailRoutingSettingsEnableEmailRouting({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<email_settings_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/email/routing/enable',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

}
