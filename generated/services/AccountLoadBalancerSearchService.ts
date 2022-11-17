/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { search_result } from '../models/search_result';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountLoadBalancerSearchService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search Resources
     * Search for Load Balancing resources.
     * @returns any Search Resources response
     * @throws ApiError
     */
    public accountLoadBalancerSearchSearchResources({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_collection & search_result)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/search',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
