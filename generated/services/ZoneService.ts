/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single_id } from '../models/api_response_single_id';
import type { components_schemas_response_collection } from '../models/components_schemas_response_collection';
import type { components_schemas_response_single } from '../models/components_schemas_response_single';
import type { purge_by_cache_tags_or_hosts_or_prefixes } from '../models/purge_by_cache_tags_or_hosts_or_prefixes';
import type { schemas_create } from '../models/schemas_create';
import type { schemas_identifier } from '../models/schemas_identifier';
import type { schemas_patch } from '../models/schemas_patch';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Zones
     * Lists, searches, sorts, and filters your zones.
     * @returns components_schemas_response_collection List Zones response
     * @throws ApiError
     */
    public zoneListZones(): CancelablePromise<components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones',
        });
    }

    /**
     * Create Zone
     * @returns components_schemas_response_single Create Zone response
     * @throws ApiError
     */
    public zoneCreateZone({
        requestBody,
    }: {
        requestBody: schemas_create,
    }): CancelablePromise<components_schemas_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Zone
     * Deletes an existing zone.
     * @returns api_response_single_id Delete Zone response
     * @throws ApiError
     */
    public zoneDeleteZone({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Zone Details
     * @returns components_schemas_response_single Zone Details response
     * @throws ApiError
     */
    public zoneZoneDetails({
        identifier,
    }: {
        identifier: schemas_identifier,
    }): CancelablePromise<components_schemas_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Edit Zone
     * Editz a zone. Only one zone property can be changed at a time.
     * @returns components_schemas_response_single Edit Zone response
     * @throws ApiError
     */
    public zoneEditZone({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: schemas_patch,
    }): CancelablePromise<components_schemas_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{identifier}',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Zone Activation Check
     * Initiates another zone activation check.
     * @returns api_response_single_id Zone Activation Check response
     * @throws ApiError
     */
    public zoneZoneActivationCheck({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier}/activation_check',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Purge Files by Cache-Tags, Host, or Prefix
     * Granularly removes one or more files from Cloudflare's cache either by specifying the host, the associated Cache-Tag, or a Prefix.
     *
     * **NB:** Cache-Tag, host, and prefix purging each have a rate limit of 30,000 purge API calls in every 24 hour period. You may purge up to 30 tags, hosts, or prefixes in one API call. This rate limit can be raised for customers who need to purge at higher volume.
     * @returns api_response_single_id Purge Files by Cache-Tags, Host, or Prefix response
     * @throws ApiError
     */
    public zonePurgeFilesByCacheTagsHostOrPrefix({
        identifier,
        requestBody,
    }: {
        identifier: schemas_identifier,
        requestBody: purge_by_cache_tags_or_hosts_or_prefixes,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/purge_cache',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
