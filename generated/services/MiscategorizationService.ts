/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { miscategorization } from '../models/miscategorization';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MiscategorizationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Miscategorization
     * @returns api_response_single Create Miscategorization response
     * @throws ApiError
     */
    public miscategorizationCreateMiscategorization({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: miscategorization,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/intel/miscategorization',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
