/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { downloads_response } from '../models/downloads_response';
import type { video_identifier } from '../models/video_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamMp4DownloadsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List downloads
     * Lists the downloads created for a video.
     * @returns downloads_response List downloads response
     * @throws ApiError
     */
    public streamMP4DownloadsListDownloads({
        videoIdentifier,
        accountIdentifier,
    }: {
        videoIdentifier: video_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<downloads_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/{video_identifier}/downloads',
            path: {
                'video_identifier': videoIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create downloads
     * Creates a download for a video when a video is ready to view.
     * @returns downloads_response Create downloads response
     * @throws ApiError
     */
    public streamMP4DownloadsCreateDownloads({
        videoIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        videoIdentifier: video_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<downloads_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/{video_identifier}/downloads',
            path: {
                'video_identifier': videoIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

}
