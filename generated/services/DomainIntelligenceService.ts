/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { domain_components_schemas_single_response } from '../models/domain_components_schemas_single_response';
import type { schemas_collection_response } from '../models/schemas_collection_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DomainIntelligenceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Domain Details
     * @returns domain_components_schemas_single_response Get Domain Details response
     * @throws ApiError
     */
    public domainIntelligenceGetDomainDetails({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<domain_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/domain',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Get Multiple Domain Details
     * @returns schemas_collection_response Get Multiple Domain Details response
     * @throws ApiError
     */
    public domainIntelligenceGetMultipleDomainDetails({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_collection_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/intel/domain/bulk',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
