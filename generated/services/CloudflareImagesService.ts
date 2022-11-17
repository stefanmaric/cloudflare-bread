/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { direct_upload_request_v2 } from '../models/direct_upload_request_v2';
import type { direct_upload_response_v2 } from '../models/direct_upload_response_v2';
import type { image_basic_upload_via_url } from '../models/image_basic_upload_via_url';
import type { image_patch_request } from '../models/image_patch_request';
import type { image_response_blob } from '../models/image_response_blob';
import type { image_response_collection } from '../models/image_response_collection';
import type { image_response_single } from '../models/image_response_single';
import type { images_components_schemas_account_identifier } from '../models/images_components_schemas_account_identifier';
import type { images_components_schemas_identifier } from '../models/images_components_schemas_identifier';
import type { images_stats } from '../models/images_stats';
import type { schemas_deleted_response } from '../models/schemas_deleted_response';
import type { schemas_direct_upload_request } from '../models/schemas_direct_upload_request';
import type { schemas_direct_upload_response } from '../models/schemas_direct_upload_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CloudflareImagesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List images
     * List up to 100 images with one request. Use the optional parameters below to get a specific range of images.
     * @returns image_response_collection List images response
     * @throws ApiError
     */
    public cloudflareImagesListImages({
        accountIdentifier,
    }: {
        accountIdentifier: images_components_schemas_account_identifier,
    }): CancelablePromise<image_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/images/v1',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Upload an image via URL
     * Upload an image via URL with up to 10 Megabytes using a single HTTP POST (multipart/form-data) request.
     * @returns image_response_single Upload an image via URL response
     * @throws ApiError
     */
    public cloudflareImagesUploadAnImageViaUrl({
        accountIdentifier,
        formData,
    }: {
        accountIdentifier: images_components_schemas_account_identifier,
        formData: image_basic_upload_via_url,
    }): CancelablePromise<image_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/images/v1',
            path: {
                'account_identifier': accountIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @deprecated
     * Create authenticated direct upload URL
     * Direct uploads allow users to upload images without API keys. A common use case are web apps, client-side applications, or mobile devices where users upload content directly to Cloudflare Images.
     * @returns schemas_direct_upload_response Create authenticated direct upload URL response
     * @throws ApiError
     */
    public cloudflareImagesCreateAuthenticatedDirectUploadUrl({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: images_components_schemas_account_identifier,
        requestBody: schemas_direct_upload_request,
    }): CancelablePromise<schemas_direct_upload_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/images/v1/direct_upload',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Images usage statistics
     * Fetch usage statistics details for Cloudflare Images.
     * @returns images_stats Images usage statistics response
     * @throws ApiError
     */
    public cloudflareImagesImagesUsageStatistics({
        accountIdentifier,
    }: {
        accountIdentifier: images_components_schemas_account_identifier,
    }): CancelablePromise<images_stats> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/images/v1/stats',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Delete image
     * Delete an image on Cloudflare Images. On success, all copies of the image are deleted and purged from cache.
     * @returns schemas_deleted_response Delete image response
     * @throws ApiError
     */
    public cloudflareImagesDeleteImage({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: images_components_schemas_identifier,
        accountIdentifier: images_components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<schemas_deleted_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/images/v1/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Image details
     * Fetch details for a single image.
     * @returns image_response_single Image details response
     * @throws ApiError
     */
    public cloudflareImagesImageDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: images_components_schemas_identifier,
        accountIdentifier: images_components_schemas_account_identifier,
    }): CancelablePromise<image_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/images/v1/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update image
     * Update image access control. On access control change, all copies of the image are purged from cache.
     * @returns image_response_single Update image response
     * @throws ApiError
     */
    public cloudflareImagesUpdateImage({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: images_components_schemas_identifier,
        accountIdentifier: images_components_schemas_account_identifier,
        requestBody: image_patch_request,
    }): CancelablePromise<image_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_identifier}/images/v1/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Base image
     * Fetch base image. For most images this will be the originally uploaded file. For larger images it can be a near-lossless version of the original.
     * @returns image_response_blob Base image response
     * @throws ApiError
     */
    public cloudflareImagesBaseImage({
        identifier,
        accountIdentifier,
    }: {
        identifier: images_components_schemas_identifier,
        accountIdentifier: images_components_schemas_account_identifier,
    }): CancelablePromise<image_response_blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/images/v1/{identifier}/blob',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create authenticated direct upload URL V2
     * Direct uploads allow users to upload images without API keys. A common use case are web apps, client-side applications, or mobile devices where users upload content directly to Cloudflare Images. This method creates a draft record for a future image. It returns an upload URL and an image identifier. To verify if the image itself has been uploaded, send an image details request (accounts/:account_identifier/images/v1/:identifier), and check that the `draft: true` property is not present.
     * @returns direct_upload_response_v2 Create authenticated direct upload URL V2 response
     * @throws ApiError
     */
    public cloudflareImagesCreateAuthenticatedDirectUploadUrlV2({
        accountIdentifier,
        formData,
    }: {
        accountIdentifier: images_components_schemas_account_identifier,
        formData: direct_upload_request_v2,
    }): CancelablePromise<direct_upload_response_v2> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/images/v2/direct_upload',
            path: {
                'account_identifier': accountIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
