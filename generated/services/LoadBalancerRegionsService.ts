/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { region_code } from '../models/region_code';
import type { region_components_schemas_response_collection } from '../models/region_components_schemas_response_collection';
import type { region_components_schemas_single_response } from '../models/region_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoadBalancerRegionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Regions
     * List all region mappings.
     * @returns region_components_schemas_response_collection List Regions response
     * @throws ApiError
     */
    public loadBalancerRegionsListRegions({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<region_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/regions',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Get Region
     * Get a single region mapping.
     * @returns region_components_schemas_single_response Get Region response
     * @throws ApiError
     */
    public loadBalancerRegionsGetRegion({
        regionCode,
        accountIdentifier,
    }: {
        regionCode: region_code,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<region_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/load_balancers/regions/{region_code}',
            path: {
                'region_code': regionCode,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
