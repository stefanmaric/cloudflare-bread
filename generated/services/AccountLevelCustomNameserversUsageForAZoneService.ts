/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { empty_response } from '../models/empty_response';
import type { get_response } from '../models/get_response';
import type { zone_metadata } from '../models/zone_metadata';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountLevelCustomNameserversUsageForAZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Account Custom Nameserver Related Zone Metadata
     * @returns get_response Get Account Custom Nameserver Related Zone Metadata response
     * @throws ApiError
     */
    public accountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadata({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<get_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/custom_ns',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Set Account Custom Nameserver Related Zone Metadata
     * @returns empty_response Set Account Custom Nameserver Related Zone Metadata response
     * @throws ApiError
     */
    public accountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadata({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: zone_metadata,
    }): CancelablePromise<empty_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/custom_ns',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
