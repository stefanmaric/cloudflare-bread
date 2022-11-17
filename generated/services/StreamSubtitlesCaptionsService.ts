/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { caption_basic_upload } from '../models/caption_basic_upload';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { language } from '../models/language';
import type { language_response_collection } from '../models/language_response_collection';
import type { language_response_single } from '../models/language_response_single';
import type { schemas_video_identifier } from '../models/schemas_video_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamSubtitlesCaptionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List captions or subtitles
     * Lists the available captions or subtitles for a specific video.
     * @returns language_response_collection List captions or subtitles response
     * @throws ApiError
     */
    public streamSubtitlesCaptionsListCaptionsOrSubtitles({
        videoIdentifier,
        accountIdentifier,
    }: {
        videoIdentifier: schemas_video_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<language_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/{video_identifier}/captions',
            path: {
                'video_identifier': videoIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Delete captions or subtitles
     * Removes the captions or subtitles from a video.
     * @returns any Delete captions or subtitles response
     * @throws ApiError
     */
    public streamSubtitlesCaptionsDeleteCaptionsOrSubtitles({
        language,
        videoIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        language: language,
        videoIdentifier: schemas_video_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/stream/{video_identifier}/captions/{language}',
            path: {
                'language': language,
                'video_identifier': videoIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Upload captions or subtitles
     * Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.
     * @returns language_response_single Upload captions or subtitles response
     * @throws ApiError
     */
    public streamSubtitlesCaptionsUploadCaptionsOrSubtitles({
        language,
        videoIdentifier,
        accountIdentifier,
        formData,
    }: {
        language: language,
        videoIdentifier: schemas_video_identifier,
        accountIdentifier: common_components_schemas_identifier,
        formData: caption_basic_upload,
    }): CancelablePromise<language_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/stream/{video_identifier}/captions/{language}',
            path: {
                'language': language,
                'video_identifier': videoIdentifier,
                'account_identifier': accountIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
