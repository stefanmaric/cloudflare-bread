/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { acns_response_collection } from '../models/acns_response_collection';
import type { acns_response_single } from '../models/acns_response_single';
import type { availability_response } from '../models/availability_response';
import type { custom_ns_components_schemas_identifier } from '../models/custom_ns_components_schemas_identifier';
import type { CustomNSInput } from '../models/CustomNSInput';
import type { empty_response } from '../models/empty_response';
import type { ns_name } from '../models/ns_name';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountLevelCustomNameserversService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Account Custom Nameservers
     * List an account's custom nameservers.
     * @returns acns_response_collection List Account Custom Nameservers response
     * @throws ApiError
     */
    public accountLevelCustomNameserversListAccountCustomNameservers({
        identifier,
    }: {
        identifier: custom_ns_components_schemas_identifier,
    }): CancelablePromise<acns_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/custom_ns',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Add Account Custom Nameserver
     * @returns acns_response_single Add Account Custom Nameserver response
     * @throws ApiError
     */
    public accountLevelCustomNameserversAddAccountCustomNameserver({
        identifier,
        requestBody,
    }: {
        identifier: custom_ns_components_schemas_identifier,
        requestBody: CustomNSInput,
    }): CancelablePromise<acns_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/custom_ns',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Eligible Zones for Account Custom Nameservers
     * @returns availability_response Get Eligible Zones for Account Custom Nameservers response
     * @throws ApiError
     */
    public accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers({
        identifier,
    }: {
        identifier: custom_ns_components_schemas_identifier,
    }): CancelablePromise<availability_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/custom_ns/availability',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Verify Account Custom Nameserver Glue Records
     * @returns acns_response_collection Verify Account Custom Nameserver Glue Records response
     * @throws ApiError
     */
    public accountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecords({
        identifier,
        requestBody,
    }: {
        identifier: custom_ns_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<acns_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/custom_ns/verify',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Delete Account Custom Nameserver
     * @returns empty_response Delete Account Custom Nameserver response
     * @throws ApiError
     */
    public accountLevelCustomNameserversDeleteAccountCustomNameserver({
        nsName,
        identifier,
        requestBody,
    }: {
        nsName: ns_name,
        identifier: custom_ns_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<empty_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/custom_ns/{ns_name}',
            path: {
                'ns_name': nsName,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

}
