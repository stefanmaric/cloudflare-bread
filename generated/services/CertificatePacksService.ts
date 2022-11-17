/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { advanced_certificate_pack_response_single } from '../models/advanced_certificate_pack_response_single';
import type { advanced_type } from '../models/advanced_type';
import type { certificate_authority } from '../models/certificate_authority';
import type { certificate_pack_quota_response } from '../models/certificate_pack_quota_response';
import type { certificate_pack_response_collection } from '../models/certificate_pack_response_collection';
import type { certificate_pack_response_single } from '../models/certificate_pack_response_single';
import type { certificate_packs_components_schemas_identifier } from '../models/certificate_packs_components_schemas_identifier';
import type { cloudflare_branding } from '../models/cloudflare_branding';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { delete_advanced_certificate_pack_response_single } from '../models/delete_advanced_certificate_pack_response_single';
import type { schemas_hosts } from '../models/schemas_hosts';
import type { validation_method } from '../models/validation_method';
import type { validity_days } from '../models/validity_days';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CertificatePacksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Certificate Packs
     * For a given zone, list all active certificate packs.
     * @returns certificate_pack_response_collection List Certificate Packs response
     * @throws ApiError
     */
    public certificatePacksListCertificatePacks({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<certificate_pack_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/ssl/certificate_packs',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Order Certificate Pack
     * For a given zone, order a certificate pack with a list of hostnames.
     * @returns certificate_pack_response_single Order Certificate Pack response
     * @throws ApiError
     */
    public certificatePacksOrderCertificatePack({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            hosts?: schemas_hosts;
        },
    }): CancelablePromise<certificate_pack_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/ssl/certificate_packs',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Order Advanced Certificate Manager Certificate Pack
     * For a given zone, order an advanced certificate pack.
     * @returns advanced_certificate_pack_response_single Order Advanced Certificate Manager Certificate Pack response
     * @throws ApiError
     */
    public certificatePacksOrderAdvancedCertificateManagerCertificatePack({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            certificate_authority: certificate_authority;
            cloudflare_branding?: cloudflare_branding;
            hosts: schemas_hosts;
            type: advanced_type;
            validation_method: validation_method;
            validity_days: validity_days;
        },
    }): CancelablePromise<advanced_certificate_pack_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/ssl/certificate_packs/order',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Certificate Pack Quotas
     * For a given zone, list certificate pack quotas.
     * @returns certificate_pack_quota_response Get Certificate Pack Quotas response
     * @throws ApiError
     */
    public certificatePacksGetCertificatePackQuotas({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<certificate_pack_quota_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/ssl/certificate_packs/quota',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Delete Advanced Certificate Manager Certificate Pack
     * For a given zone, delete an advanced certificate pack.
     * @returns delete_advanced_certificate_pack_response_single Delete Advanced Certificate Manager Certificate Pack response
     * @throws ApiError
     */
    public certificatePacksDeleteAdvancedCertificateManagerCertificatePack({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: certificate_packs_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<delete_advanced_certificate_pack_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/ssl/certificate_packs/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Certificate Pack
     * For a given zone, get a certificate pack.
     * @returns certificate_pack_response_single Get Certificate Pack response
     * @throws ApiError
     */
    public certificatePacksGetCertificatePack({
        identifier,
        zoneIdentifier,
    }: {
        identifier: certificate_packs_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<certificate_pack_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/ssl/certificate_packs/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Restart Validation for Advanced Certificate Manager Certificate Pack
     * For a given zone, restart validation for an advanced certificate pack.  This is only a validation operation for a Certificate Pack in a validation_timed_out status.
     * @returns advanced_certificate_pack_response_single Restart Validation for Advanced Certificate Manager Certificate Pack response
     * @throws ApiError
     */
    public certificatePacksRestartValidationForAdvancedCertificateManagerCertificatePack({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: certificate_packs_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<advanced_certificate_pack_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/ssl/certificate_packs/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

}
