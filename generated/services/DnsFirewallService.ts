/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { dns_firewall_response_collection } from '../models/dns_firewall_response_collection';
import type { dns_firewall_single_response } from '../models/dns_firewall_single_response';
import type { schemas_dns_firewall } from '../models/schemas_dns_firewall';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DnsFirewallService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List DNS Firewall Clusters
     * List configured DNS Firewall clusters for an account.
     * @returns dns_firewall_response_collection List DNS Firewall Clusters response
     * @throws ApiError
     */
    public dnsFirewallListDnsFirewallClusters({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<dns_firewall_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/dns_firewall',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create DNS Firewall Cluster
     * Create a configured DNS Firewall Cluster.
     * @returns dns_firewall_single_response Create DNS Firewall Cluster response
     * @throws ApiError
     */
    public dnsFirewallCreateDnsFirewallCluster({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<dns_firewall_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/dns_firewall',
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
    public dnsFirewallDeleteDnsFirewallCluster({
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
            url: '/accounts/{account_identifier}/dns_firewall/{identifier}',
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
     * @returns dns_firewall_single_response DNS Firewall Cluster Details response
     * @throws ApiError
     */
    public dnsFirewallDnsFirewallClusterDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<dns_firewall_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/dns_firewall/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update DNS Firewall Cluster
     * Modify a DNS Firewall Cluster configuration.
     * @returns dns_firewall_single_response Update DNS Firewall Cluster response
     * @throws ApiError
     */
    public dnsFirewallUpdateDnsFirewallCluster({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: schemas_dns_firewall,
    }): CancelablePromise<dns_firewall_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/dns_firewall/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
