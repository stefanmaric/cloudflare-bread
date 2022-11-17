/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { disable_transfer_response } from '../models/disable_transfer_response';
import type { dns_secondary_primary_zone_components_schemas_identifier } from '../models/dns_secondary_primary_zone_components_schemas_identifier';
import type { enable_transfer_response } from '../models/enable_transfer_response';
import type { schemas_force_response } from '../models/schemas_force_response';
import type { schemas_id_response } from '../models/schemas_id_response';
import type { single_request_outgoing } from '../models/single_request_outgoing';
import type { single_response_outgoing } from '../models/single_response_outgoing';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SecondaryDnsPrimaryZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete Primary Zone Configuration
     * Delete primary zone configuration for outgoing zone transfers.
     * @returns schemas_id_response Delete Primary Zone Configuration response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZoneDeletePrimaryZoneConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{identifier}/secondary_dns/outgoing',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Primary Zone Configuration Details
     * Get primary zone configuration for outgoing zone transfers.
     * @returns single_response_outgoing Primary Zone Configuration Details response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZonePrimaryZoneConfigurationDetails({
        identifier,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
    }): CancelablePromise<single_response_outgoing> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/secondary_dns/outgoing',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Primary Zone Configuration
     * Create primary zone configuration for outgoing zone transfers.
     * @returns single_response_outgoing Create Primary Zone Configuration response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZoneCreatePrimaryZoneConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
        requestBody: single_request_outgoing,
    }): CancelablePromise<single_response_outgoing> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/secondary_dns/outgoing',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Primary Zone Configuration
     * Update primary zone configuration for outgoing zone transfers.
     * @returns single_response_outgoing Update Primary Zone Configuration response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZoneUpdatePrimaryZoneConfiguration({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
        requestBody: single_request_outgoing,
    }): CancelablePromise<single_response_outgoing> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier}/secondary_dns/outgoing',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Disable Outgoing Zone Transfers
     * Disable outgoing zone transfers for primary zone and clears IXFR backlog of primary zone.
     * @returns disable_transfer_response Disable Outgoing Zone Transfers response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZoneDisableOutgoingZoneTransfers({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<disable_transfer_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/secondary_dns/outgoing/disable',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Enable Outgoing Zone Transfers
     * Enable outgoing zone transfers for primary zone.
     * @returns enable_transfer_response Enable Outgoing Zone Transfers response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZoneEnableOutgoingZoneTransfers({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<enable_transfer_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/secondary_dns/outgoing/enable',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Force DNS NOTIFY
     * Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.
     * @returns schemas_force_response Force DNS NOTIFY response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZoneForceDnsNotify({
        identifier,
        requestBody,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_force_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/secondary_dns/outgoing/force_notify',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Outgoing Zone Transfer Status
     * Get primary zone transfer status.
     * @returns enable_transfer_response Get Outgoing Zone Transfer Status response
     * @throws ApiError
     */
    public secondaryDnsPrimaryZoneGetOutgoingZoneTransferStatus({
        identifier,
    }: {
        identifier: dns_secondary_primary_zone_components_schemas_identifier,
    }): CancelablePromise<enable_transfer_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/secondary_dns/outgoing/status',
            path: {
                'identifier': identifier,
            },
        });
    }

}
