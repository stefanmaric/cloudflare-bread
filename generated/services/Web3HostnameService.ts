/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single_id } from '../models/api_response_single_id';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_collection_response } from '../models/components_schemas_collection_response';
import type { content_list_details_response } from '../models/content_list_details_response';
import type { content_list_entry_collection_response } from '../models/content_list_entry_collection_response';
import type { content_list_entry_create_request } from '../models/content_list_entry_create_request';
import type { content_list_entry_single_response } from '../models/content_list_entry_single_response';
import type { content_list_update_request } from '../models/content_list_update_request';
import type { create_request } from '../models/create_request';
import type { modify_request } from '../models/modify_request';
import type { web3_hostname_components_schemas_single_response } from '../models/web3_hostname_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class Web3HostnameService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Web3 Hostnames
     * @returns components_schemas_collection_response List Web3 Hostnames response
     * @throws ApiError
     */
    public web3HostnameListWeb3Hostnames({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<components_schemas_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/web3/hostnames',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create Web3 Hostname
     * @returns web3_hostname_components_schemas_single_response Create Web3 Hostname response
     * @throws ApiError
     */
    public web3HostnameCreateWeb3Hostname({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: create_request,
    }): CancelablePromise<web3_hostname_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/web3/hostnames',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Web3 Hostname
     * @returns api_response_single_id Delete Web3 Hostname response
     * @throws ApiError
     */
    public web3HostnameDeleteWeb3Hostname({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Web3 Hostname Details
     * @returns web3_hostname_components_schemas_single_response Web3 Hostname Details response
     * @throws ApiError
     */
    public web3HostnameWeb3HostnameDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<web3_hostname_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit Web3 Hostname
     * @returns web3_hostname_components_schemas_single_response Edit Web3 Hostname response
     * @throws ApiError
     */
    public web3HostnameEditWeb3Hostname({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: modify_request,
    }): CancelablePromise<web3_hostname_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * IPFS Universal Path Gateway Content List Details
     * @returns content_list_details_response IPFS Universal Path Gateway Content List Details response
     * @throws ApiError
     */
    public web3HostnameIpfsUniversalPathGatewayContentListDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<content_list_details_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update IPFS Universal Path Gateway Content List
     * @returns content_list_details_response Update IPFS Universal Path Gateway Content List response
     * @throws ApiError
     */
    public web3HostnameUpdateIpfsUniversalPathGatewayContentList({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: content_list_update_request,
    }): CancelablePromise<content_list_details_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List IPFS Universal Path Gateway Content List Entries
     * @returns content_list_entry_collection_response List IPFS Universal Path Gateway Content List Entries response
     * @throws ApiError
     */
    public web3HostnameListIpfsUniversalPathGatewayContentListEntries({
        identifier,
        zoneIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<content_list_entry_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create IPFS Universal Path Gateway Content List Entry
     * @returns content_list_entry_single_response Create IPFS Universal Path Gateway Content List Entry response
     * @throws ApiError
     */
    public web3HostnameCreateIpfsUniversalPathGatewayContentListEntry({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: content_list_entry_create_request,
    }): CancelablePromise<content_list_entry_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete IPFS Universal Path Gateway Content List Entry
     * @returns api_response_single_id Delete IPFS Universal Path Gateway Content List Entry response
     * @throws ApiError
     */
    public web3HostnameDeleteIpfsUniversalPathGatewayContentListEntry({
        contentListEntryIdentifier,
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        contentListEntryIdentifier: common_components_schemas_identifier,
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}',
            path: {
                'content_list_entry_identifier': contentListEntryIdentifier,
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * IPFS Universal Path Gateway Content List Entry Details
     * @returns content_list_entry_single_response IPFS Universal Path Gateway Content List Entry Details response
     * @throws ApiError
     */
    public web3HostnameIpfsUniversalPathGatewayContentListEntryDetails({
        contentListEntryIdentifier,
        identifier,
        zoneIdentifier,
    }: {
        contentListEntryIdentifier: common_components_schemas_identifier,
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<content_list_entry_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}',
            path: {
                'content_list_entry_identifier': contentListEntryIdentifier,
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit IPFS Universal Path Gateway Content List Entry
     * @returns content_list_entry_single_response Edit IPFS Universal Path Gateway Content List Entry response
     * @throws ApiError
     */
    public web3HostnameEditIpfsUniversalPathGatewayContentListEntry({
        contentListEntryIdentifier,
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        contentListEntryIdentifier: common_components_schemas_identifier,
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: content_list_entry_create_request,
    }): CancelablePromise<content_list_entry_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}',
            path: {
                'content_list_entry_identifier': contentListEntryIdentifier,
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
