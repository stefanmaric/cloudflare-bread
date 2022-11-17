/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_certificate_response_single } from '../models/components_schemas_certificate_response_single';
import type { hostname_aop_response_collection } from '../models/hostname_aop_response_collection';
import type { hostname_aop_single_response } from '../models/hostname_aop_single_response';
import type { hostname_authenticated_origin_pull_components_schemas_certificate } from '../models/hostname_authenticated_origin_pull_components_schemas_certificate';
import type { hostname_authenticated_origin_pull_components_schemas_certificate_response_collection } from '../models/hostname_authenticated_origin_pull_components_schemas_certificate_response_collection';
import type { hostname_authenticated_origin_pull_components_schemas_identifier } from '../models/hostname_authenticated_origin_pull_components_schemas_identifier';
import type { schemas_hostname } from '../models/schemas_hostname';
import type { schemas_private_key } from '../models/schemas_private_key';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PerHostnameAuthenticatedOriginPullService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Enable or Disable a Hostname for Client Authentication
     * Associate a hostname to a certificate and enable, disable or invalidate the association. If disabled, client certificate will not be sent to the hostname even if activated at the zone level. 100 maximum associations on a single certificate are allowed. Note: Use a null value for parameter *enabled* to invalidate the association.
     * @returns hostname_aop_response_collection Enable or Disable a Hostname for Client Authentication response
     * @throws ApiError
     */
    public perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<hostname_aop_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/hostnames',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Certificates
     * @returns hostname_authenticated_origin_pull_components_schemas_certificate_response_collection List Certificates response
     * @throws ApiError
     */
    public perHostnameAuthenticatedOriginPullListCertificates({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<hostname_authenticated_origin_pull_components_schemas_certificate_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Upload a Hostname Client Certificate
     * Upload a certificate to be used for client authentication on a hostname. 10 hostname certificates per zone are allowed.
     * @returns components_schemas_certificate_response_single Upload a Hostname Client Certificate response
     * @throws ApiError
     */
    public perHostnameAuthenticatedOriginPullUploadAHostnameClientCertificate({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            certificate: hostname_authenticated_origin_pull_components_schemas_certificate;
            private_key: schemas_private_key;
        },
    }): CancelablePromise<components_schemas_certificate_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Hostname Client Certificate
     * @returns components_schemas_certificate_response_single Delete Hostname Client Certificate response
     * @throws ApiError
     */
    public perHostnameAuthenticatedOriginPullDeleteHostnameClientCertificate({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: hostname_authenticated_origin_pull_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<components_schemas_certificate_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get the Hostname Client Certificate
     * Get the certificate by ID to be used for client authentication on a hostname.
     * @returns components_schemas_certificate_response_single Get the Hostname Client Certificate response
     * @throws ApiError
     */
    public perHostnameAuthenticatedOriginPullGetTheHostnameClientCertificate({
        identifier,
        zoneIdentifier,
    }: {
        identifier: hostname_authenticated_origin_pull_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<components_schemas_certificate_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Get the Hostname Status for Client Authentication
     * @returns hostname_aop_single_response Get the Hostname Status for Client Authentication response
     * @throws ApiError
     */
    public perHostnameAuthenticatedOriginPullGetTheHostnameStatusForClientAuthentication({
        hostname,
        zoneIdentifier,
    }: {
        hostname: schemas_hostname,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<hostname_aop_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/origin_tls_client_auth/hostnames/{hostname}',
            path: {
                'hostname': hostname,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

}
