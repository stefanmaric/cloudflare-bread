/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { certificate_response_single } from '../models/certificate_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_certificate_response_collection } from '../models/components_schemas_certificate_response_collection';
import type { enabled_response } from '../models/enabled_response';
import type { private_key } from '../models/private_key';
import type { zone_authenticated_origin_pull_components_schemas_certificate } from '../models/zone_authenticated_origin_pull_components_schemas_certificate';
import type { zone_authenticated_origin_pull_components_schemas_enabled } from '../models/zone_authenticated_origin_pull_components_schemas_enabled';
import type { zone_authenticated_origin_pull_components_schemas_identifier } from '../models/zone_authenticated_origin_pull_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneLevelAuthenticatedOriginPullsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Certificates
     * @returns components_schemas_certificate_response_collection List Certificates response
     * @throws ApiError
     */
    public zoneLevelAuthenticatedOriginPullsListCertificates({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<components_schemas_certificate_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/origin_tls_client_auth',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Upload Certificate
     * Upload your own certificate you want Cloudflare to use for edge-to-origin communication to override the shared certificate. Please note that it is important to keep only one certificate active. Also, make sure to enable zone-level authenticated origin pulls by making a PUT call to settings endpoint to see the uploaded certificate in use.
     * @returns certificate_response_single Upload Certificate response
     * @throws ApiError
     */
    public zoneLevelAuthenticatedOriginPullsUploadCertificate({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            certificate: zone_authenticated_origin_pull_components_schemas_certificate;
            private_key: private_key;
        },
    }): CancelablePromise<certificate_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/origin_tls_client_auth',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Enablement Setting for Zone
     * Get whether zone-level authenticated origin pulls is enabled or not. It is false by default.
     * @returns enabled_response Get Enablement Setting for Zone response
     * @throws ApiError
     */
    public zoneLevelAuthenticatedOriginPullsGetEnablementSettingForZone({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<enabled_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/settings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Set Enablement for Zone
     * Enable or disable zone-level authenticated origin pulls. 'enabled' should be set true either before/after the certificate is uploaded to see the certificate in use.
     * @returns enabled_response Set Enablement for Zone response
     * @throws ApiError
     */
    public zoneLevelAuthenticatedOriginPullsSetEnablementForZone({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            enabled: zone_authenticated_origin_pull_components_schemas_enabled;
        },
    }): CancelablePromise<enabled_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/settings',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Certificate
     * @returns certificate_response_single Delete Certificate response
     * @throws ApiError
     */
    public zoneLevelAuthenticatedOriginPullsDeleteCertificate({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: zone_authenticated_origin_pull_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<certificate_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Certificate Details
     * @returns certificate_response_single Get Certificate Details response
     * @throws ApiError
     */
    public zoneLevelAuthenticatedOriginPullsGetCertificateDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: zone_authenticated_origin_pull_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<certificate_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
