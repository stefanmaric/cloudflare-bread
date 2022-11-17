/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { categories_components_schemas_response_collection } from '../models/categories_components_schemas_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustGatewayCategoriesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Categories
     * List all Categories.
     * @returns categories_components_schemas_response_collection List Categories response
     * @throws ApiError
     */
    public zeroTrustGatewayCategoriesListCategories({
        accountId,
    }: {
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<categories_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/gateway/categories',
            path: {
                'account_id': accountId,
            },
        });
    }

}
