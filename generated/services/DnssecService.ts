/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { delete_dnssec_response_single } from '../models/delete_dnssec_response_single';
import type { dnssec_response_single } from '../models/dnssec_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DnssecService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete DNSSEC records
     * Delete DNSSEC.
     * @returns delete_dnssec_response_single Delete DNSSEC records response
     * @throws ApiError
     */
    public dnssecDeleteDnssecRecords({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<delete_dnssec_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/dnssec',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * DNSSEC Details
     * Details about DNSSEC status and configuration.
     * @returns dnssec_response_single DNSSEC Details response
     * @throws ApiError
     */
    public dnssecDnssecDetails({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<dnssec_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/dnssec',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit DNSSEC Status
     * Enable or disable DNSSEC.
     * @returns dnssec_response_single Edit DNSSEC Status response
     * @throws ApiError
     */
    public dnssecEditDnssecStatus({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<dnssec_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/dnssec',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
