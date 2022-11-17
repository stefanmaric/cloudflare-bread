/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { certificate_response_single_id } from '../models/certificate_response_single_id';
import type { certificates_components_schemas_identifier } from '../models/certificates_components_schemas_identifier';
import type { csr } from '../models/csr';
import type { hostnames } from '../models/hostnames';
import type { request_type } from '../models/request_type';
import type { requested_validity } from '../models/requested_validity';
import type { schemas_certificate_response_collection } from '../models/schemas_certificate_response_collection';
import type { schemas_certificate_response_single } from '../models/schemas_certificate_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OriginCaService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Certificates
     * List all existing Origin CA certificates for a given zone. Use your Origin CA Key as your User Service Key when calling this endpoint ([see above](#requests)).
     * @returns schemas_certificate_response_collection List Certificates response
     * @throws ApiError
     */
    public originCaListCertificates(): CancelablePromise<schemas_certificate_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/certificates',
        });
    }

    /**
     * Create Certificate
     * Create an Origin CA certificate. Use your Origin CA Key as your User Service Key when calling this endpoint ([see above](#requests)).
     * @returns schemas_certificate_response_single Create Certificate response
     * @throws ApiError
     */
    public originCaCreateCertificate({
        requestBody,
    }: {
        requestBody: {
            csr?: csr;
            hostnames?: hostnames;
            request_type?: request_type;
            requested_validity?: requested_validity;
        },
    }): CancelablePromise<schemas_certificate_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/certificates',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke Certificate
     * Revoke an existing Origin CA certificate by its serial number. Use your Origin CA Key as your User Service Key when calling this endpoint ([see above](#requests)).
     * @returns certificate_response_single_id Revoke Certificate response
     * @throws ApiError
     */
    public originCaRevokeCertificate({
        identifier,
        requestBody,
    }: {
        identifier: certificates_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<certificate_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/certificates/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Certificate
     * Get an existing Origin CA certificate by its serial number. Use your Origin CA Key as your User Service Key when calling this endpoint ([see above](#requests)).
     * @returns schemas_certificate_response_single Get Certificate response
     * @throws ApiError
     */
    public originCaGetCertificate({
        identifier,
    }: {
        identifier: certificates_components_schemas_identifier,
    }): CancelablePromise<schemas_certificate_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/certificates/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

}
