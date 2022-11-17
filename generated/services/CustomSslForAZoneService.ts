/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bundle_method } from '../models/bundle_method';
import type { certificate } from '../models/certificate';
import type { certificate_response_collection } from '../models/certificate_response_collection';
import type { certificate_response_id_only } from '../models/certificate_response_id_only';
import type { certificate_response_single } from '../models/certificate_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { custom_certificate_components_schemas_identifier } from '../models/custom_certificate_components_schemas_identifier';
import type { custom_certificate_components_schemas_type } from '../models/custom_certificate_components_schemas_type';
import type { geo_restrictions } from '../models/geo_restrictions';
import type { policy } from '../models/policy';
import type { private_key } from '../models/private_key';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomSslForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List SSL Configurations
     * List, search, and filter all of your custom SSL certificates. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always supercede 'sni_custom' certificates.
     * @returns certificate_response_collection List SSL Configurations response
     * @throws ApiError
     */
    public customSslForAZoneListSslConfigurations({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<certificate_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_certificates',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create SSL Configuration
     * Upload a new SSL certificate for a zone.
     * @returns certificate_response_single Create SSL Configuration response
     * @throws ApiError
     */
    public customSslForAZoneCreateSslConfiguration({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            bundle_method?: bundle_method;
            certificate: certificate;
            geo_restrictions?: geo_restrictions;
            policy?: policy;
            private_key: private_key;
            type?: custom_certificate_components_schemas_type;
        },
    }): CancelablePromise<certificate_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/custom_certificates',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Re-prioritize SSL Certificates
     * If a zone has multiple SSL certificates, you can set the order in which they should be used during a request. The higher priority will break ties across overlapping 'legacy_custom' certificates.
     * @returns certificate_response_collection Re-prioritize SSL Certificates response
     * @throws ApiError
     */
    public customSslForAZoneRePrioritizeSslCertificates({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<certificate_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/custom_certificates/prioritize',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete SSL Configuration
     * Remove a SSL certificate from a zone.
     * @returns certificate_response_id_only Delete SSL Configuration response
     * @throws ApiError
     */
    public customSslForAZoneDeleteSslConfiguration({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: custom_certificate_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<certificate_response_id_only> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/custom_certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * SSL Configuration Details
     * @returns certificate_response_single SSL Configuration Details response
     * @throws ApiError
     */
    public customSslForAZoneSslConfigurationDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: custom_certificate_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<certificate_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit SSL Configuration
     * Upload a new private key and/or PEM/CRT for the SSL certificate. Note: PATCHing a configuration for sni_custom certificates will result in a new resource id being returned, and the previous one being deleted.
     * @returns certificate_response_single Edit SSL Configuration response
     * @throws ApiError
     */
    public customSslForAZoneEditSslConfiguration({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: custom_certificate_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            bundle_method?: bundle_method;
            certificate?: certificate;
            geo_restrictions?: geo_restrictions;
            policy?: policy;
            private_key?: private_key;
        },
    }): CancelablePromise<certificate_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/custom_certificates/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
