/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { content } from '../models/content';
import type { dns_record_components_schemas_identifier } from '../models/dns_record_components_schemas_identifier';
import type { dns_record_components_schemas_name } from '../models/dns_record_components_schemas_name';
import type { dns_record_components_schemas_type } from '../models/dns_record_components_schemas_type';
import type { dns_response_collection } from '../models/dns_response_collection';
import type { dns_response_import_scan } from '../models/dns_response_import_scan';
import type { dns_response_single } from '../models/dns_response_single';
import type { priority } from '../models/priority';
import type { proxied } from '../models/proxied';
import type { ttl } from '../models/ttl';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DnsRecordsForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List DNS Records
     * List, search, sort, and filter a zones' DNS records.
     * @returns dns_response_collection List DNS Records response
     * @throws ApiError
     */
    public dnsRecordsForAZoneListDnsRecords({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<dns_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/dns_records',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create DNS Record
     * Create a new DNS record for a zone. See the record object definitions for required attributes for each record type.
     * @returns dns_response_single Create DNS Record response
     * @throws ApiError
     */
    public dnsRecordsForAZoneCreateDnsRecord({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            content: content;
            name: dns_record_components_schemas_name;
            priority?: priority;
            proxied?: proxied;
            ttl: ttl;
            type: dns_record_components_schemas_type;
        },
    }): CancelablePromise<dns_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/dns_records',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Export DNS Records
     * You can export your [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this endpoint.
     * @returns any Export DNS Records response
     * @throws ApiError
     */
    public dnsRecordsForAZoneExportDnsRecords({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/dns_records/export',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Import DNS Records
     * You can upload your [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this endpoint. It assumes that cURL is called from a location with bind_config.txt (valid BIND config) present.
     * @returns dns_response_import_scan Import DNS Records response
     * @throws ApiError
     */
    public dnsRecordsForAZoneImportDnsRecords({
        zoneIdentifier,
        formData,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        formData: {
            /**
             * BIND config to upload.
             */
            file: string;
            /**
             * Whether or not proxiable records should receive the performance and security benefits of Cloudflare.
             */
            proxied?: boolean;
        },
    }): CancelablePromise<dns_response_import_scan> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/dns_records/import',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Scan DNS Records
     * Scan for common DNS records on your domain and automatically add them to your zone. Useful if you haven't updated your nameservers yet.
     * @returns dns_response_import_scan Scan DNS Records response
     * @throws ApiError
     */
    public dnsRecordsForAZoneScanDnsRecords({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<dns_response_import_scan> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/dns_records/scan',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Delete DNS Record
     * @returns any Delete DNS Record response
     * @throws ApiError
     */
    public dnsRecordsForAZoneDeleteDnsRecord({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: dns_record_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<{
        result?: any;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/dns_records/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * DNS Record Details
     * @returns dns_response_single DNS Record Details response
     * @throws ApiError
     */
    public dnsRecordsForAZoneDnsRecordDetails({
        identifier,
        zoneIdentifier,
    }: {
        identifier: dns_record_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<dns_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/dns_records/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Patch DNS Record
     * @returns dns_response_single Patch DNS Record response
     * @throws ApiError
     */
    public dnsRecordsForAZonePatchDnsRecord({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: dns_record_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            content?: content;
            name?: dns_record_components_schemas_name;
            proxied?: proxied;
            ttl?: ttl;
            type?: dns_record_components_schemas_type;
        },
    }): CancelablePromise<dns_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/dns_records/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update DNS Record
     * @returns dns_response_single Update DNS Record response
     * @throws ApiError
     */
    public dnsRecordsForAZoneUpdateDnsRecord({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: dns_record_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            content: content;
            name: dns_record_components_schemas_name;
            proxied?: proxied;
            ttl: ttl;
            type: dns_record_components_schemas_type;
        },
    }): CancelablePromise<dns_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/dns_records/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
