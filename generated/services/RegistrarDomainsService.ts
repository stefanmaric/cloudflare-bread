/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { domain_response_collection } from '../models/domain_response_collection';
import type { domain_response_single } from '../models/domain_response_single';
import type { domain_update_properties } from '../models/domain_update_properties';
import type { schemas_domain_name } from '../models/schemas_domain_name';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RegistrarDomainsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List domains
     * List domains handled by Registrar.
     * @returns domain_response_collection List domains response
     * @throws ApiError
     */
    public registrarDomainsListDomains({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<domain_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/registrar/domains',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get domain
     * Show individual domain.
     * @returns domain_response_single Get domain response
     * @throws ApiError
     */
    public registrarDomainsGetDomain({
        domainName,
        accountIdentifier,
    }: {
        domainName: schemas_domain_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<domain_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/registrar/domains/{domain_name}',
            path: {
                'domain_name': domainName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update domain
     * Update individual domain.
     * @returns domain_response_single Update domain response
     * @throws ApiError
     */
    public registrarDomainsUpdateDomain({
        domainName,
        accountIdentifier,
        requestBody,
    }: {
        domainName: schemas_domain_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: domain_update_properties,
    }): CancelablePromise<domain_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/registrar/domains/{domain_name}',
            path: {
                'domain_name': domainName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
