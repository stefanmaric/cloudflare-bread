/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { script_name } from '../models/script_name';
import type { script_response_collection } from '../models/script_response_collection';
import type { usage_model_response } from '../models/usage_model_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkerScriptService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Workers
     * Fetch a list of uploaded workers.
     * @returns script_response_collection List Workers response
     * @throws ApiError
     */
    public workerScriptListWorkers({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<script_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/scripts',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Delete Worker
     * Delete your worker. This call has no response body on a successful delete.
     *
     * **Query paramaters**:
     *
     * 1.  `force`: boolean;   If set to true, delete will not be stopped by associated service binding, durable object, or other binding. Any of these associated bindings/durable objects will be deleted along with the script.
     * @returns any Delete Worker response
     * @throws ApiError
     */
    public workerScriptDeleteWorker({
        scriptName,
        accountIdentifier,
        requestBody,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Download Worker
     * Fetch raw script content for your worker. Note this is the original script content, not JSON encoded.
     * @returns any Download Worker response
     * @throws ApiError
     */
    public workerScriptDownloadWorker({
        scriptName,
        accountIdentifier,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Upload Worker Module
     * Upload a worker module.
     * @returns any Upload Worker Module response
     * @throws ApiError
     */
    public workerScriptUploadWorkerModule({
        scriptName,
        accountIdentifier,
        formData,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
        formData: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Fetch Usage Model
     * Fetches the Usage Model for a given Worker.
     * @returns usage_model_response Fetch Usage Model response
     * @throws ApiError
     */
    public workerScriptFetchUsageModel({
        scriptName,
        accountIdentifier,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<usage_model_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}/usage-model',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Usage Model
     * Updates the Usage Model for a given Worker. Requires a Workers Paid subscription.
     * @returns usage_model_response Update Usage Model response
     * @throws ApiError
     */
    public workerScriptUpdateUsageModel({
        scriptName,
        accountIdentifier,
        requestBody,
    }: {
        scriptName: script_name,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<usage_model_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/workers/scripts/{script_name}/usage-model',
            path: {
                'script_name': scriptName,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
