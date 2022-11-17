/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_account_identifier } from '../models/components_schemas_account_identifier';
import type { creator } from '../models/creator';
import type { direct_upload_request } from '../models/direct_upload_request';
import type { direct_upload_response } from '../models/direct_upload_response';
import type { nft } from '../models/nft';
import type { signed_token_request } from '../models/signed_token_request';
import type { signed_token_response } from '../models/signed_token_response';
import type { tus_resumable } from '../models/tus_resumable';
import type { upload_length } from '../models/upload_length';
import type { video_copy_request } from '../models/video_copy_request';
import type { video_response_collection } from '../models/video_response_collection';
import type { video_response_single } from '../models/video_response_single';
import type { videos_components_schemas_identifier } from '../models/videos_components_schemas_identifier';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamVideosService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List videos
     * Lists up to 1000 videos from a single request. For a specific range, refer to the optional parameters.
     * @returns video_response_collection List videos response
     * @throws ApiError
     */
    public streamVideosListVideos({
        accountIdentifier,
    }: {
        accountIdentifier: components_schemas_account_identifier,
    }): CancelablePromise<video_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Initiate video uploads using TUS
     * Initiates a video upload using the TUS protocol. On success, the server responds with a status code 201 (created) and includes a `location` header to indicate where the content should be uploaded. Refer to https://tus.io for protocol details.
     * @returns any Initiate video uploads using TUS response
     * @throws ApiError
     */
    public streamVideosInitiateVideoUploadsUsingTus({
        tusResumable,
        uploadCreator,
        uploadLength,
        accountIdentifier,
        requestBody,
    }: {
        tusResumable: tus_resumable,
        uploadCreator: creator,
        uploadLength: upload_length,
        accountIdentifier: components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream',
            path: {
                'account_identifier': accountIdentifier,
            },
            headers: {
                'Tus-Resumable': tusResumable,
                'Upload-Creator': uploadCreator,
                'Upload-Length': uploadLength,
            },
            body: requestBody,
        });
    }

    /**
     * Upload videos from a URL
     * Uploads a video to Stream from a provided URL.
     * @returns video_response_single Upload videos from a URL response
     * @throws ApiError
     */
    public streamVideosUploadVideosFromAUrl({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: components_schemas_account_identifier,
        requestBody: video_copy_request,
    }): CancelablePromise<video_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/copy',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Upload videos via direct upload URLs
     * Creates a direct upload that allows video uploads without an API key.
     * @returns direct_upload_response Upload videos via direct upload URLs response
     * @throws ApiError
     */
    public streamVideosUploadVideosViaDirectUploadUrLs({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: components_schemas_account_identifier,
        requestBody: direct_upload_request,
    }): CancelablePromise<direct_upload_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/direct_upload',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete video
     * Deletes a video and its copies from Cloudflare Stream.
     * @returns any Delete video response
     * @throws ApiError
     */
    public streamVideosDeleteVideo({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: videos_components_schemas_identifier,
        accountIdentifier: components_schemas_account_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/stream/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Retrieve video details
     * Fetches details for a single video.
     * @returns video_response_single Retrieve video details response
     * @throws ApiError
     */
    public streamVideosRetrieveVideoDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: videos_components_schemas_identifier,
        accountIdentifier: components_schemas_account_identifier,
    }): CancelablePromise<video_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Associate videos to NFTs
     * Asssociates videos with a token ID and contract address to transfer admin rights on a video. If a change in ownership of the ERC-721 token happens on the Ethereum blockchain, the new token owner can claim control of the video.
     * @returns video_response_collection Associate videos to NFTs response
     * @throws ApiError
     */
    public streamVideosAssociateVideosToNfTs({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: videos_components_schemas_identifier,
        accountIdentifier: components_schemas_account_identifier,
        requestBody: nft,
    }): CancelablePromise<video_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retreieve embed Code HTML
     * Fetches an HTML code snippet to embed a video in a web page delivered through Cloudflare. On success, returns an HTML fragment for use on web pages to display a video. On failure, returns a JSON response body.
     * @returns any Retreieve embed Code HTML response
     * @throws ApiError
     */
    public streamVideosRetreieveEmbedCodeHtml({
        identifier,
        accountIdentifier,
    }: {
        identifier: videos_components_schemas_identifier,
        accountIdentifier: components_schemas_account_identifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/{identifier}/embed',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create signed URL tokens for videso
     * Creates a signed URL token for a video. If a body is not provided in the request, a token is created with default values.
     * @returns signed_token_response Create signed URL tokens for videso response
     * @throws ApiError
     */
    public streamVideosCreateSignedUrlTokensForVideso({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: videos_components_schemas_identifier,
        accountIdentifier: components_schemas_account_identifier,
        requestBody: signed_token_request,
    }): CancelablePromise<signed_token_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/{identifier}/token',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
