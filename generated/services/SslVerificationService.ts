/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { cert_pack_uuid } from '../models/cert_pack_uuid';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_validation_method } from '../models/components_schemas_validation_method';
import type { ssl_validation_method_response_collection } from '../models/ssl_validation_method_response_collection';
import type { ssl_verification_response_collection } from '../models/ssl_verification_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SslVerificationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * SSL Verification Details
     * Get SSL Verification Info for a Zone.
     * @returns ssl_verification_response_collection SSL Verification Details response
     * @throws ApiError
     */
    public sslVerificationSslVerificationDetails({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<ssl_verification_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/ssl/verification',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit SSL Certificate Pack Validation Method
     * Edit SSL validation method for a certificate pack. A PATCH request will request an immediate validation check on any certificate, and return the updated status. If a validation method is provided, the validation will be immediately attempted using that method.
     * @returns ssl_validation_method_response_collection Edit SSL Certificate Pack Validation Method response
     * @throws ApiError
     */
    public sslVerificationEditSslCertificatePackValidationMethod({
        certPackUuid,
        zoneIdentifier,
        requestBody,
    }: {
        certPackUuid: cert_pack_uuid,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: components_schemas_validation_method,
    }): CancelablePromise<ssl_validation_method_response_collection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/ssl/verification/{cert_pack_uuid}',
            path: {
                'cert_pack_uuid': certPackUuid,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
