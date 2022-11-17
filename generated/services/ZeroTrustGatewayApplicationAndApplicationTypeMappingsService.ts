/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app_types_components_schemas_response_collection } from '../models/app_types_components_schemas_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustGatewayApplicationAndApplicationTypeMappingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Application and Application Type mappings
     * List all Application and Application Type mappings.
     * @returns app_types_components_schemas_response_collection List Application and Application Type mappings response
     * @throws ApiError
     */
    public zeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappings({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<app_types_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/app_types',
            path: {
                'identifier': identifier,
            },
        });
    }

}
