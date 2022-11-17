/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { domain_name } from '../models/domain_name';
import type { domain_response_collection } from '../models/domain_response_collection';
import type { domain_response_single } from '../models/domain_response_single';
import type { domains_post } from '../models/domains_post';
import type { project_name } from '../models/project_name';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PagesDomainsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get domains
     * Fetch a list of all domains.
     * @returns domain_response_collection Get domains response
     * @throws ApiError
     */
    public pagesDomainsGetDomains({
        projectName,
        accountIdentifier,
    }: {
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<domain_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/domains',
            path: {
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Add domain
     * Add a new domain for the Pages project.
     * @returns domain_response_single Add domain response
     * @throws ApiError
     */
    public pagesDomainsAddDomain({
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: domains_post,
    }): CancelablePromise<domain_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/domains',
            path: {
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete domain
     * Delete a domain.
     * @returns any Delete domain response
     * @throws ApiError
     */
    public pagesDomainsDeleteDomain({
        domainName,
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        domainName: domain_name,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/domains/{domain_name}',
            path: {
                'domain_name': domainName,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get domain
     * Fetch a single domain.
     * @returns domain_response_single Get domain response
     * @throws ApiError
     */
    public pagesDomainsGetDomain({
        domainName,
        projectName,
        accountIdentifier,
    }: {
        domainName: domain_name,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<domain_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/domains/{domain_name}',
            path: {
                'domain_name': domainName,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Patch domain
     * Retry the validation status of a single domain.
     * @returns domain_response_single Patch domain response
     * @throws ApiError
     */
    public pagesDomainsPatchDomain({
        domainName,
        projectName,
        accountIdentifier,
        requestBody,
    }: {
        domainName: domain_name,
        projectName: project_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<domain_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/pages/projects/{project_name}/domains/{domain_name}',
            path: {
                'domain_name': domainName,
                'project_name': projectName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
