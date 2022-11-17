/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dns_secondary_secondary_zone } from '../models/dns_secondary_secondary_zone';
import type { dns_secondary_secondary_zone_components_schemas_identifier } from '../models/dns_secondary_secondary_zone_components_schemas_identifier';
import type { force_response } from '../models/force_response';
import type { id_response } from '../models/id_response';
import type { single_response_incoming } from '../models/single_response_incoming';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecondaryDnsSecondaryZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Force AXFR
     * Sends AXFR zone transfer request to primary nameserver(s).
     * @returns force_response Force AXFR response
     * @throws ApiError
     */
    public secondaryDnsSecondaryZoneForceAxfr({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_secondary_zone_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<force_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/secondary_dns/force_axfr',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Delete Secondary Zone Configuration
     * Delete secondary zone configuration for incoming zone transfers.
     * @returns id_response Delete Secondary Zone Configuration response
     * @throws ApiError
     */
    public secondaryDnsSecondaryZoneDeleteSecondaryZoneConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_secondary_zone_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{identifier}/secondary_dns/incoming',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Secondary Zone Configuration Details
     * Get secondary zone configuration for incoming zone transfers.
     * @returns single_response_incoming Secondary Zone Configuration Details response
     * @throws ApiError
     */
    public secondaryDnsSecondaryZoneSecondaryZoneConfigurationDetails({
        identifier,
    }: {
        identifier: dns_secondary_secondary_zone_components_schemas_identifier,
    }): CancelablePromise<single_response_incoming> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/secondary_dns/incoming',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Secondary Zone Configuration
     * Create secondary zone configuration for incoming zone transfers.
     * @returns single_response_incoming Create Secondary Zone Configuration response
     * @throws ApiError
     */
    public secondaryDnsSecondaryZoneCreateSecondaryZoneConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_secondary_zone_components_schemas_identifier,
        requestBody: dns_secondary_secondary_zone,
    }): CancelablePromise<single_response_incoming> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/secondary_dns/incoming',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Secondary Zone Configuration
     * Update secondary zone configuration for incoming zone transfers.
     * @returns single_response_incoming Update Secondary Zone Configuration response
     * @throws ApiError
     */
    public secondaryDnsSecondaryZoneUpdateSecondaryZoneConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_secondary_zone_components_schemas_identifier,
        requestBody: dns_secondary_secondary_zone,
    }): CancelablePromise<single_response_incoming> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier}/secondary_dns/incoming',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
