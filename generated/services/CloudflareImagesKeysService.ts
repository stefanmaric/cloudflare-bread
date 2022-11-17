/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_key_response_collection } from '../models/schemas_key_response_collection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CloudflareImagesKeysService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Signing Keys
     * Lists your signing keys. These can be found on your Cloudflare Images dashboard.
     * @returns schemas_key_response_collection List Signing Keys response
     * @throws ApiError
     */
    public cloudflareImagesKeysListSigningKeys({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<schemas_key_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/images/v1/keys',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

}
