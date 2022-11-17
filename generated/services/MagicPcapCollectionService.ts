/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { pcaps_collection_response } from '../models/pcaps_collection_response';
import type { pcaps_ownership_collection } from '../models/pcaps_ownership_collection';
import type { pcaps_ownership_request } from '../models/pcaps_ownership_request';
import type { pcaps_ownership_single_response } from '../models/pcaps_ownership_single_response';
import type { pcaps_ownership_validate_request } from '../models/pcaps_ownership_validate_request';
import type { pcaps_request_pcap } from '../models/pcaps_request_pcap';
import type { pcaps_single_response } from '../models/pcaps_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MagicPcapCollectionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List packet capture requests
     * Lists all packet capture requests for an account.
     * @returns pcaps_collection_response List packet capture requests response
     * @throws ApiError
     */
    public magicPcapCollectionListPacketCaptureRequests({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pcaps_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pcaps',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create PCAP request
     * Create new PCAP request for account.
     * @returns pcaps_single_response Create PCAP request response
     * @throws ApiError
     */
    public magicPcapCollectionCreatePcapRequest({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: pcaps_request_pcap,
    }): CancelablePromise<pcaps_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pcaps',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List PCAPs Bucket Ownership
     * List all buckets configured for use with PCAPs API.
     * @returns pcaps_ownership_collection List PCAPs Bucket Ownership response
     * @throws ApiError
     */
    public magicPcapCollectionListPcaPsBucketOwnership({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pcaps_ownership_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pcaps/ownership',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Add buckets for full packet captures
     * Adds an AWS or GCP bucket to use with full packet captures.
     * @returns pcaps_ownership_single_response Add buckets for full packet captures response
     * @throws ApiError
     */
    public magicPcapCollectionAddBucketsForFullPacketCaptures({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: pcaps_ownership_request,
    }): CancelablePromise<pcaps_ownership_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pcaps/ownership',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Validate buckets for full packet captures
     * Validates buckets added to the packet captures API.
     * @returns pcaps_ownership_single_response Validate buckets for full packet captures response
     * @throws ApiError
     */
    public magicPcapCollectionValidateBucketsForFullPacketCaptures({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: pcaps_ownership_validate_request,
    }): CancelablePromise<pcaps_ownership_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pcaps/ownership/validate',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete buckets for full packet captures
     * Deletes buckets added to the packet captures API.
     * @returns any Delete buckets for full packet captures response
     * @throws ApiError
     */
    public magicPcapCollectionDeleteBucketsForFullPacketCaptures({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/pcaps/ownership/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get PCAP request
     * Get information for a PCAP request by id.
     * @returns pcaps_single_response Get PCAP request response
     * @throws ApiError
     */
    public magicPcapCollectionGetPcapRequest({
        identifier,
        accountIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pcaps_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pcaps/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Download Simple PCAP
     * Download PCAP information into a file. Response is a binary PCAP file.
     * @returns any Download Simple PCAP response
     * @throws ApiError
     */
    public magicPcapCollectionDownloadSimplePcap({
        identifier,
        accountIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pcaps/{identifier}/download',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
