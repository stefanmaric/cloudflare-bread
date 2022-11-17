/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { create_input_request } from '../models/create_input_request';
import type { create_output_request } from '../models/create_output_request';
import type { live_input_identifier } from '../models/live_input_identifier';
import type { live_input_response_collection } from '../models/live_input_response_collection';
import type { live_input_response_single } from '../models/live_input_response_single';
import type { output_identifier } from '../models/output_identifier';
import type { output_response_collection } from '../models/output_response_collection';
import type { output_response_single } from '../models/output_response_single';
import type { update_input_request } from '../models/update_input_request';
import type { update_output_request } from '../models/update_output_request';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StreamLiveInputsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List live inputs
     * Lists the live inputs created for an account. To get the credentials needed to stream to a specific live input, request a single live input.
     * @returns live_input_response_collection List live inputs response
     * @throws ApiError
     */
    public streamLiveInputsListLiveInputs({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<live_input_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/live_inputs',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create a live input
     * Creates a live input, and returns credentials that you or your users can use to stream live video to Cloudflare Stream.
     * @returns live_input_response_single Create a live input response
     * @throws ApiError
     */
    public streamLiveInputsCreateALiveInput({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: create_input_request,
    }): CancelablePromise<live_input_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/live_inputs',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a live input
     * Prevents a live input from being streamed to and makes the live input inaccessible to any future API calls.
     * @returns any Delete a live input response
     * @throws ApiError
     */
    public streamLiveInputsDeleteALiveInput({
        liveInputIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        liveInputIdentifier: live_input_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}',
            path: {
                'live_input_identifier': liveInputIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Retrieve a live input
     * Retrieves details of an existing live input.
     * @returns live_input_response_single Retrieve a live input response
     * @throws ApiError
     */
    public streamLiveInputsRetrieveALiveInput({
        liveInputIdentifier,
        accountIdentifier,
    }: {
        liveInputIdentifier: live_input_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<live_input_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}',
            path: {
                'live_input_identifier': liveInputIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update a live input
     * Updates a specified live input.
     * @returns live_input_response_single Update a live input response
     * @throws ApiError
     */
    public streamLiveInputsUpdateALiveInput({
        liveInputIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        liveInputIdentifier: live_input_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: update_input_request,
    }): CancelablePromise<live_input_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}',
            path: {
                'live_input_identifier': liveInputIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List all outputs associated with a specified live input
     * Retrieves all outputs associated with a specified live input.
     * @returns output_response_collection List all outputs associated with a specified live input response
     * @throws ApiError
     */
    public streamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInput({
        liveInputIdentifier,
        accountIdentifier,
    }: {
        liveInputIdentifier: live_input_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<output_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs',
            path: {
                'live_input_identifier': liveInputIdentifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create a new output, connected to a live input
     * Creates a new output that can be used to simulcast or restream live video to other RTMP or SRT destinations. Outputs are always linked to a specific live input — one live input can have many outputs.
     * @returns output_response_single Create a new output, connected to a live input response
     * @throws ApiError
     */
    public streamLiveInputsCreateANewOutputConnectedToALiveInput({
        liveInputIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        liveInputIdentifier: live_input_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: create_output_request,
    }): CancelablePromise<output_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs',
            path: {
                'live_input_identifier': liveInputIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an output
     * Deletes an output and removes it from the associated live input.
     * @returns any Delete an output response
     * @throws ApiError
     */
    public streamLiveInputsDeleteAnOutput({
        outputIdentifier,
        liveInputIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        outputIdentifier: output_identifier,
        liveInputIdentifier: live_input_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}',
            path: {
                'output_identifier': outputIdentifier,
                'live_input_identifier': liveInputIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Update an output
     * Updates the state of an output.
     * @returns output_response_single Update an output response
     * @throws ApiError
     */
    public streamLiveInputsUpdateAnOutput({
        outputIdentifier,
        liveInputIdentifier,
        accountIdentifier,
        requestBody,
    }: {
        outputIdentifier: output_identifier,
        liveInputIdentifier: live_input_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: update_output_request,
    }): CancelablePromise<output_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}',
            path: {
                'output_identifier': outputIdentifier,
                'live_input_identifier': liveInputIdentifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
