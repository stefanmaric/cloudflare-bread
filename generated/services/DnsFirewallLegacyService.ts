/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_virtual_dns } from '../models/schemas_virtual_dns';
import type { virtual_dns_response_collection } from '../models/virtual_dns_response_collection';
import type { virtual_dns_single_response } from '../models/virtual_dns_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DnsFirewallLegacyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List DNS Firewall Clusters
     * List configured DNS Firewall clusters for an account.
     * @returns virtual_dns_response_collection List DNS Firewall Clusters response
     * @throws ApiError
     */
    public dnsFirewallLegacyListDnsFirewallClusters({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<virtual_dns_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/virtual_dns',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create DNS Firewall Cluster
     * Create a configured DNS Firewall Cluster.
     * @returns virtual_dns_single_response Create DNS Firewall Cluster response
     * @throws ApiError
     */
    public dnsFirewallLegacyCreateDnsFirewallCluster({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<virtual_dns_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/virtual_dns',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete DNS Firewall Cluster
     * Delete a configured DNS Firewall Cluster.
     * @returns any Delete DNS Firewall Cluster response
     * @throws ApiError
     */
    public dnsFirewallLegacyDeleteDnsFirewallCluster({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/virtual_dns/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * DNS Firewall Cluster Details
     * Show a single configured DNS Firewall cluster for an account.
     * @returns virtual_dns_single_response DNS Firewall Cluster Details response
     * @throws ApiError
     */
    public dnsFirewallLegacyDnsFirewallClusterDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<virtual_dns_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/virtual_dns/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update DNS Firewall Cluster
     * Modify a DNS Firewall Cluster configuration.
     * @returns virtual_dns_single_response Update DNS Firewall Cluster response
     * @throws ApiError
     */
    public dnsFirewallLegacyUpdateDnsFirewallCluster({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: schemas_virtual_dns,
    }): CancelablePromise<virtual_dns_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/virtual_dns/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
