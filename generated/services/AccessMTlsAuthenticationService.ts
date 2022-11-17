/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { certificates_components_schemas_id_response } from '../models/certificates_components_schemas_id_response';
import type { certificates_components_schemas_response_collection } from '../models/certificates_components_schemas_response_collection';
import type { certificates_components_schemas_single_response } from '../models/certificates_components_schemas_single_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { uuid } from '../models/uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessMTlsAuthenticationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List mTLS certificates
     * Lists all mTLS certificates.
     * @returns certificates_components_schemas_response_collection List mTLS certificates response
     * @throws ApiError
     */
    public accessMTlsAuthenticationListMTlsCertificates({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<certificates_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/certificates',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Add an mTLS certificate
     * Adds a new mTLS root certificate to Access.
     * @returns certificates_components_schemas_single_response Add an mTLS certificate response
     * @throws ApiError
     */
    public accessMTlsAuthenticationAddAnMTlsCertificate({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<certificates_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/certificates',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an mTLS certificate
     * Deletes an mTLS certificate.
     * @returns certificates_components_schemas_id_response Delete an mTLS certificate response
     * @throws ApiError
     */
    public accessMTlsAuthenticationDeleteAnMTlsCertificate({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<certificates_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/access/certificates/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get an mTLS certificate
     * Fetches a single mTLS certificate.
     * @returns certificates_components_schemas_single_response Get an mTLS certificate response
     * @throws ApiError
     */
    public accessMTlsAuthenticationGetAnMTlsCertificate({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<certificates_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/certificates/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update an mTLS certificate
     * Updates a configured mTLS certificate.
     * @returns certificates_components_schemas_single_response Update an mTLS certificate response
     * @throws ApiError
     */
    public accessMTlsAuthenticationUpdateAnMTlsCertificate({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<certificates_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/access/certificates/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
