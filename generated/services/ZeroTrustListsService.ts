/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { list_item_response_collection } from '../models/list_item_response_collection';
import type { lists_components_schemas_empty_response } from '../models/lists_components_schemas_empty_response';
import type { lists_components_schemas_identifier } from '../models/lists_components_schemas_identifier';
import type { lists_components_schemas_response_collection } from '../models/lists_components_schemas_response_collection';
import type { lists_components_schemas_single_response } from '../models/lists_components_schemas_single_response';
import type { lists_components_schemas_uuid } from '../models/lists_components_schemas_uuid';
import type { single_response_with_list_items } from '../models/single_response_with_list_items';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustListsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Zero Trust Lists
     * List Zero Trust Lists for an account.
     * @returns lists_components_schemas_response_collection List Zero Trust Lists response
     * @throws ApiError
     */
    public zeroTrustListsListZeroTrustLists({
        identifier,
    }: {
        identifier: lists_components_schemas_identifier,
    }): CancelablePromise<lists_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/lists',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Zero Trust List
     * Create a new Zero Trust List.
     * @returns single_response_with_list_items Create Zero Trust List response
     * @throws ApiError
     */
    public zeroTrustListsCreateZeroTrustList({
        identifier,
        requestBody,
    }: {
        identifier: lists_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<single_response_with_list_items> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/gateway/lists',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Zero Trust List
     * Delete a Zero Trust List.
     * @returns lists_components_schemas_empty_response Delete Zero Trust List response
     * @throws ApiError
     */
    public zeroTrustListsDeleteZeroTrustList({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: lists_components_schemas_uuid,
        identifier: lists_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<lists_components_schemas_empty_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/gateway/lists/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Zero Trust List Details
     * Fetch a single Zero Trust List.
     * @returns lists_components_schemas_single_response Zero Trust List Details response
     * @throws ApiError
     */
    public zeroTrustListsZeroTrustListDetails({
        uuid,
        identifier,
    }: {
        uuid: lists_components_schemas_uuid,
        identifier: lists_components_schemas_identifier,
    }): CancelablePromise<lists_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/lists/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Patch Zero Trust List
     * Append or remove an item from a configured Zero Trust List.
     * @returns lists_components_schemas_single_response Patch Zero Trust List response
     * @throws ApiError
     */
    public zeroTrustListsPatchZeroTrustList({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: lists_components_schemas_uuid,
        identifier: lists_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<lists_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{identifier}/gateway/lists/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update Zero Trust List
     * Update a configured Zero Trust List.
     * @returns lists_components_schemas_single_response Update Zero Trust List response
     * @throws ApiError
     */
    public zeroTrustListsUpdateZeroTrustList({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: lists_components_schemas_uuid,
        identifier: lists_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<lists_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/gateway/lists/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Zero Trust List Items
     * Fetch all items of a single Zero Trust List.
     * @returns list_item_response_collection Zero Trust List Items response
     * @throws ApiError
     */
    public zeroTrustListsZeroTrustListItems({
        uuid,
        identifier,
    }: {
        uuid: lists_components_schemas_uuid,
        identifier: lists_components_schemas_identifier,
    }): CancelablePromise<list_item_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/lists/{uuid}/items',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

}
