/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_hostname } from '../models/components_schemas_hostname';
import type { domain_identifier } from '../models/domain_identifier';
import type { domains_components_schemas_account_identifier } from '../models/domains_components_schemas_account_identifier';
import type { environment } from '../models/environment';
import type { schemas_domain_response_collection } from '../models/schemas_domain_response_collection';
import type { schemas_domain_response_single } from '../models/schemas_domain_response_single';
import type { service } from '../models/service';
import type { zone_identifier } from '../models/zone_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerDomainService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Domains
     * Lists all Worker Domains.
     * @returns schemas_domain_response_collection List Domains response
     * @throws ApiError
     */
    public workerDomainListDomains({
        accountIdentifier,
    }: {
        accountIdentifier: domains_components_schemas_account_identifier,
    }): CancelablePromise<schemas_domain_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/domains',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Attach to Domain
     * Attaches a worker to a zone and hostname.
     * @returns schemas_domain_response_single Attach to Domain response
     * @throws ApiError
     */
    public workerDomainAttachToDomain({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: domains_components_schemas_account_identifier,
        requestBody: {
            environment: environment;
            hostname: components_schemas_hostname;
            service: service;
            zone_id: zone_identifier;
        },
    }): CancelablePromise<schemas_domain_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/domains',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Detach from Domain
     * Detaches a worker from a zone and hostname.
     * @returns any Detach from Domain response
     * @throws ApiError
     */
    public workerDomainDetachFromDomain({
        domainIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        domainIdentifier: domain_identifier,
        accountIdentifier: domains_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/workers/domains/{domain_identifier}',
            path: {
                'domain_identifier': domainIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a Domain
     * Gets a Worker Domain.
     * @returns schemas_domain_response_single Get a Domain response
     * @throws ApiError
     */
    public workerDomainGetADomain({
        domainIdentifier,
        accountIdentifier,
    }: {
        domainIdentifier: domain_identifier,
        accountIdentifier: domains_components_schemas_account_identifier,
    }): CancelablePromise<schemas_domain_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/domains/{domain_identifier}',
            path: {
                'domain_identifier': domainIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
