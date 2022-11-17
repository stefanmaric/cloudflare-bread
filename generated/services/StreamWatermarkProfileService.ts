/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { components_schemas_account_identifier } from '../models/components_schemas_account_identifier';
import type { watermark_basic_upload } from '../models/watermark_basic_upload';
import type { watermark_response_collection } from '../models/watermark_response_collection';
import type { watermark_response_single } from '../models/watermark_response_single';
import type { watermarks_components_schemas_identifier } from '../models/watermarks_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamWatermarkProfileService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List watermark profiles
     * Lists all watermark profiles for an account.
     * @returns watermark_response_collection List watermark profiles response
     * @throws ApiError
     */
    public streamWatermarkProfileListWatermarkProfiles({
        accountIdentifier,
    }: {
        accountIdentifier: components_schemas_account_identifier,
    }): CancelablePromise<watermark_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/watermarks',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create watermark profiles via basic upload
     * Creates watermark profiles using a single `HTTP POST multipart/form-data` request.
     * @returns watermark_response_single Create watermark profiles via basic upload response
     * @throws ApiError
     */
    public streamWatermarkProfileCreateWatermarkProfilesViaBasicUpload({
        accountIdentifier,
        formData,
    }: {
        accountIdentifier: components_schemas_account_identifier,
        formData: watermark_basic_upload,
    }): CancelablePromise<watermark_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/watermarks',
            path: {
                'account_identifier': accountIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete watermark profiles
     * Deletes a watermark profile.
     * @returns any Delete watermark profiles response
     * @throws ApiError
     */
    public streamWatermarkProfileDeleteWatermarkProfiles({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: watermarks_components_schemas_identifier,
        accountIdentifier: components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/stream/watermarks/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Watermark profile details
     * Retrieves details for a single watermark profile.
     * @returns watermark_response_single Watermark profile details response
     * @throws ApiError
     */
    public streamWatermarkProfileWatermarkProfileDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: watermarks_components_schemas_identifier,
        accountIdentifier: components_schemas_account_identifier,
    }): CancelablePromise<watermark_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/watermarks/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
