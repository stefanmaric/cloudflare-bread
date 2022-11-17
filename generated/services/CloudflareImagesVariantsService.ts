/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_deleted_response } from '../models/schemas_deleted_response';
import type { variant_generation_request } from '../models/variant_generation_request';
import type { variant_list_response } from '../models/variant_list_response';
import type { variant_patch_request } from '../models/variant_patch_request';
import type { variant_simple_response } from '../models/variant_simple_response';
import type { variants_components_schemas_identifier } from '../models/variants_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CloudflareImagesVariantsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List variants
     * Lists existing variants.
     * @returns variant_list_response List variants response
     * @throws ApiError
     */
    public cloudflareImagesVariantsListVariants({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<variant_list_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/images/v1/variants',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create a variant
     * Specify variants that allow you to resize images for different use cases.
     * @returns variant_simple_response Create a variant response
     * @throws ApiError
     */
    public cloudflareImagesVariantsCreateAVariant({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: variant_generation_request,
    }): CancelablePromise<variant_simple_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/images/v1/variants',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a variant
     * Deleting a variant purges the cache for all images associated with the variant.
     * @returns schemas_deleted_response Delete a variant response
     * @throws ApiError
     */
    public cloudflareImagesVariantsDeleteAVariant({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: variants_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_deleted_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/images/v1/variants/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Variant details
     * Fetch details for a single variant.
     * @returns variant_simple_response Variant details response
     * @throws ApiError
     */
    public cloudflareImagesVariantsVariantDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: variants_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<variant_simple_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/images/v1/variants/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update a variant
     * Updating a variant purges the cache for all images associated with the variant.
     * @returns variant_simple_response Update a variant response
     * @throws ApiError
     */
    public cloudflareImagesVariantsUpdateAVariant({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: variants_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: variant_patch_request,
    }): CancelablePromise<variant_simple_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/images/v1/variants/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
