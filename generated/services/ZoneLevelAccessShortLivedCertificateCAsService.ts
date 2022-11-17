/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ca_components_schemas_id_response } from '../models/ca_components_schemas_id_response';
import type { ca_components_schemas_response_collection } from '../models/ca_components_schemas_response_collection';
import type { ca_components_schemas_single_response } from '../models/ca_components_schemas_single_response';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { uuid } from '../models/uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneLevelAccessShortLivedCertificateCAsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List short-lived certificate CAs
     * Lists short-lived certificate CAs and their public keys.
     * @returns ca_components_schemas_response_collection List short-lived certificate CAs response
     * @throws ApiError
     */
    public zoneLevelAccessShortLivedCertificateCAsListShortLivedCertificateCAs({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<ca_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/apps/ca',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Delete a short-lived certificate CA
     * Deletes a short-lived certificate CA.
     * @returns ca_components_schemas_id_response Delete a short-lived certificate CA response
     * @throws ApiError
     */
    public zoneLevelAccessShortLivedCertificateCAsDeleteAShortLivedCertificateCa({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ca_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{identifier}/access/apps/{uuid}/ca',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a short-lived certificate CA
     * Fetches a short-lived certificate CA and its public key.
     * @returns ca_components_schemas_single_response Get a short-lived certificate CA response
     * @throws ApiError
     */
    public zoneLevelAccessShortLivedCertificateCAsGetAShortLivedCertificateCa({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<ca_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/apps/{uuid}/ca',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Create a short-lived certificate CA
     * Generates a new short-lived certificate CA and public key.
     * @returns ca_components_schemas_single_response Create a short-lived certificate CA response
     * @throws ApiError
     */
    public zoneLevelAccessShortLivedCertificateCAsCreateAShortLivedCertificateCa({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ca_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/access/apps/{uuid}/ca',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

}
