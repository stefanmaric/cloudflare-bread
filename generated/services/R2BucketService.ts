/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bucket_name } from '../models/bucket_name';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { r2_single_bucket_operation_response } from '../models/r2_single_bucket_operation_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class R2BucketService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Bucket
     * Creates a new R2 bucket.
     * @returns r2_single_bucket_operation_response Create Bucket response
     * @throws ApiError
     */
    public r2BucketCreateBucket({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<r2_single_bucket_operation_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/r2/buckets',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Bucket
     * Deletes an existing R2 bucket.
     * @returns r2_single_bucket_operation_response Delete Bucket response
     * @throws ApiError
     */
    public r2BucketDeleteBucket({
        bucketName,
        accountIdentifier,
        requestBody,
    }: {
        bucketName: bucket_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<r2_single_bucket_operation_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/r2/buckets/{bucket_name}',
            path: {
                'bucket_name': bucketName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
