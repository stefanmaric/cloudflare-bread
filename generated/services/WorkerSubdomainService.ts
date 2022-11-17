/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { subdomain_response } from '../models/subdomain_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerSubdomainService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Subdomain
     * Returns a Workers subdomain for an account.
     * @returns subdomain_response Get Subdomain response
     * @throws ApiError
     */
    public workerSubdomainGetSubdomain({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<subdomain_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/subdomain',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Subdomain
     * Creates a Workers subdomain for an account.
     * @returns subdomain_response Create Subdomain response
     * @throws ApiError
     */
    public workerSubdomainCreateSubdomain({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<subdomain_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/subdomain',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
