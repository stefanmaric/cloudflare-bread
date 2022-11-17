/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { custom_hostname_components_schemas_identifier } from '../models/custom_hostname_components_schemas_identifier';
import type { custom_hostname_response_collection } from '../models/custom_hostname_response_collection';
import type { custom_hostname_response_single } from '../models/custom_hostname_response_single';
import type { custom_metadata } from '../models/custom_metadata';
import type { custom_origin_server } from '../models/custom_origin_server';
import type { custom_origin_sni } from '../models/custom_origin_sni';
import type { hostname } from '../models/hostname';
import type { sslpost } from '../models/sslpost';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomHostnameForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Custom Hostnames
     * List, search, sort, and filter all of your custom hostnames.
     * @returns custom_hostname_response_collection List Custom Hostnames response
     * @throws ApiError
     */
    public customHostnameForAZoneListCustomHostnames({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<custom_hostname_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_hostnames',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create Custom Hostname
     * Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation).
     * @returns custom_hostname_response_single Create Custom Hostname response
     * @throws ApiError
     */
    public customHostnameForAZoneCreateCustomHostname({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            hostname: hostname;
            ssl: sslpost;
        },
    }): CancelablePromise<custom_hostname_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/custom_hostnames',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Custom Hostname (and any issued SSL certificates)
     * @returns any Delete Custom Hostname (and any issued SSL certificates) response
     * @throws ApiError
     */
    public customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: custom_hostname_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<{
        id?: custom_hostname_components_schemas_identifier;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/custom_hostnames/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Custom Hostname Details
     * @returns custom_hostname_response_single Custom Hostname Details response
     * @throws ApiError
     */
    public customHostnameForAZoneCustomHostnameDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: custom_hostname_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<custom_hostname_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_hostnames/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit Custom Hostname
     * Modify SSL configuration for a custom hostname. When sent with SSL config that matches existing config, used to indicate that hostname should pass domain control validation (DCV). Can also be used to change validation type, e.g., from 'http' to 'email'.
     * @returns custom_hostname_response_single Edit Custom Hostname response
     * @throws ApiError
     */
    public customHostnameForAZoneEditCustomHostname({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: custom_hostname_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            custom_metadata?: custom_metadata;
            custom_origin_server?: custom_origin_server;
            custom_origin_sni?: custom_origin_sni;
            ssl?: sslpost;
        },
    }): CancelablePromise<custom_hostname_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/custom_hostnames/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
