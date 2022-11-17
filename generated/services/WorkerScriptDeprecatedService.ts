/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { script_response_single } from '../models/script_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerScriptDeprecatedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * Delete Worker
     * Delete your worker. This call has no response body on a successful delete.
     * @returns any Delete Worker response
     * @throws ApiError
     */
    public workerScriptDeprecatedDeleteWorker({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/workers/script',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * @deprecated
     * Download Worker
     * Fetch raw script content for your worker. Note this is the original script content, not JSON encoded.
     * @returns any Download Worker response
     * @throws ApiError
     */
    public workerScriptDeprecatedDownloadWorker({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/workers/script',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * @deprecated
     * Upload Worker
     * Upload a worker, or a new version of a worker.
     * @returns script_response_single Upload Worker response
     * @throws ApiError
     */
    public workerScriptDeprecatedUploadWorker({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<script_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/workers/script',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/javascript',
        });
    }

}
