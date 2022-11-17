/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_common } from '../models/api_response_common';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { dataset } from '../models/dataset';
import type { destination_exists_response } from '../models/destination_exists_response';
import type { get_ownership_response } from '../models/get_ownership_response';
import type { id } from '../models/id';
import type { logpush_field_response_collection } from '../models/logpush_field_response_collection';
import type { logpush_job_response_collection } from '../models/logpush_job_response_collection';
import type { logpush_job_response_single } from '../models/logpush_job_response_single';
import type { validate_ownership_response } from '../models/validate_ownership_response';
import type { validate_response } from '../models/validate_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LogpushJobsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List fields
     * Lists all fields available for a dataset. The response result is an object with key-value pairs, where keys are field names, and values are descriptions.
     * @returns logpush_field_response_collection List fields response
     * @throws ApiError
     */
    public logpushJobsListFields({
        dataset,
        zoneIdentifier,
    }: {
        dataset: dataset,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<logpush_field_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logpush/datasets/{dataset}/fields',
            path: {
                'dataset': dataset,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * List Logpush jobs for a dataset
     * Lists Logpush jobs for a zone for a dataset.
     * @returns logpush_job_response_collection List Logpush jobs for a dataset response
     * @throws ApiError
     */
    public logpushJobsListLogpushJobsForADataset({
        dataset,
        zoneIdentifier,
    }: {
        dataset: dataset,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<logpush_job_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logpush/datasets/{dataset}/jobs',
            path: {
                'dataset': dataset,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * List Logpush jobs
     * Lists Logpush jobs for a zone.
     * @returns logpush_job_response_collection List Logpush jobs response
     * @throws ApiError
     */
    public logpushJobsListLogpushJobs({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<logpush_job_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logpush/jobs',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create Logpush job
     * Creates a new Logpush job for a zone.
     * @returns logpush_job_response_single Create Logpush job response
     * @throws ApiError
     */
    public logpushJobsCreateLogpushJob({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<logpush_job_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/logpush/jobs',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Logpush job
     * Deletes a Logpush job.
     * @returns any Delete Logpush job response
     * @throws ApiError
     */
    public logpushJobsDeleteLogpushJob({
        jobIdentifier,
        zoneIdentifier,
        requestBody,
    }: {
        jobIdentifier: id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_common> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/logpush/jobs/{job_identifier}',
            path: {
                'job_identifier': jobIdentifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get Logpush job details
     * Gets the details of a Logpush job.
     * @returns logpush_job_response_single Get Logpush job details response
     * @throws ApiError
     */
    public logpushJobsGetLogpushJobDetails({
        jobIdentifier,
        zoneIdentifier,
    }: {
        jobIdentifier: id,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<logpush_job_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/logpush/jobs/{job_identifier}',
            path: {
                'job_identifier': jobIdentifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Update Logpush job
     * Updates a Logpush job.
     * @returns logpush_job_response_single Update Logpush job response
     * @throws ApiError
     */
    public logpushJobsUpdateLogpushJob({
        jobIdentifier,
        zoneIdentifier,
        requestBody,
    }: {
        jobIdentifier: id,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<logpush_job_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/logpush/jobs/{job_identifier}',
            path: {
                'job_identifier': jobIdentifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get ownership challenge
     * Gets a new ownership challenge sent to your destination.
     * @returns get_ownership_response Get ownership challenge response
     * @throws ApiError
     */
    public logpushJobsGetOwnershipChallenge({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<get_ownership_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/logpush/ownership',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Validate ownership challenge
     * Validates ownership challenge of the destination.
     * @returns validate_ownership_response Validate ownership challenge response
     * @throws ApiError
     */
    public logpushJobsValidateOwnershipChallenge({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<validate_ownership_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/logpush/ownership/validate',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Check destination exists
     * Checks if there is an existing job with a destination.
     * @returns destination_exists_response Check destination exists response
     * @throws ApiError
     */
    public logpushJobsCheckDestinationExists({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<destination_exists_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/logpush/validate/destination/exists',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Validate origin
     * Validates logpull origin with logpull_options.
     * @returns validate_response Validate origin response
     * @throws ApiError
     */
    public logpushJobsValidateOrigin({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<validate_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/logpush/validate/origin',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
