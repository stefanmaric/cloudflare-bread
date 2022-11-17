/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { ipam_prefixes_components_schemas_response_collection } from '../models/ipam_prefixes_components_schemas_response_collection';
import type { ipam_prefixes_components_schemas_single_response } from '../models/ipam_prefixes_components_schemas_single_response';
import type { loa_document_identifier } from '../models/loa_document_identifier';
import type { loa_upload_response } from '../models/loa_upload_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IpAddressManagementPrefixesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Upload LOA Document
     * Submit LOA document (pdf format) under the account.
     * @returns loa_upload_response Upload LOA Document response
     * @throws ApiError
     */
    public ipAddressManagementPrefixesUploadLoaDocument({
        accountIdentifier,
        formData,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        formData: {
            /**
             * LOA document to upload.
             */
            loa_document: string;
        },
    }): CancelablePromise<loa_upload_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/addressing/loa_documents',
            path: {
                'account_identifier': accountIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Download LOA Document
     * Download specified LOA document under the account.
     * @returns any Download LOA Document response
     * @throws ApiError
     */
    public ipAddressManagementPrefixesDownloadLoaDocument({
        loaDocumentIdentifier,
        accountIdentifier,
    }: {
        loaDocumentIdentifier: loa_document_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/addressing/loa_documents/{loa_document_identifier}/download',
            path: {
                'loa_document_identifier': loaDocumentIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * List Prefixes
     * List all prefixes owned by the account.
     * @returns ipam_prefixes_components_schemas_response_collection List Prefixes response
     * @throws ApiError
     */
    public ipAddressManagementPrefixesListPrefixes({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<ipam_prefixes_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/addressing/prefixes',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Add Prefix
     * Add a prefix under the account.
     * @returns ipam_prefixes_components_schemas_single_response Add Prefix response
     * @throws ApiError
     */
    public ipAddressManagementPrefixesAddPrefix({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ipam_prefixes_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/addressing/prefixes',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Prefix
     * Delete an unapproved prefix owned by the account.
     * @returns api_response_collection Delete Prefix response
     * @throws ApiError
     */
    public ipAddressManagementPrefixesDeletePrefix({
        prefixIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}',
            path: {
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Prefix Details
     * List a particular prefix owned by the account.
     * @returns ipam_prefixes_components_schemas_single_response Prefix Details response
     * @throws ApiError
     */
    public ipAddressManagementPrefixesPrefixDetails({
        prefixIdentifier,
        accountIdentifier,
    }: {
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<ipam_prefixes_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}',
            path: {
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Prefix Description
     * Modify the description for a prefix owned by the account.
     * @returns ipam_prefixes_components_schemas_single_response Update Prefix Description response
     * @throws ApiError
     */
    public ipAddressManagementPrefixesUpdatePrefixDescription({
        prefixIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        prefixIdentifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ipam_prefixes_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}',
            path: {
                'prefix_identifier': prefixIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
