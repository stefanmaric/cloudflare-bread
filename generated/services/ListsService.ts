/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bulk_operation_response_collection } from '../models/bulk_operation_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { item_id } from '../models/item_id';
import type { item_response_collection } from '../models/item_response_collection';
import type { items_list_response_collection } from '../models/items_list_response_collection';
import type { items_update_request_collection } from '../models/items_update_request_collection';
import type { kind } from '../models/kind';
import type { list_delete_response_collection } from '../models/list_delete_response_collection';
import type { list_id } from '../models/list_id';
import type { list_response_collection } from '../models/list_response_collection';
import type { lists_async_response } from '../models/lists_async_response';
import type { lists_components_schemas_description } from '../models/lists_components_schemas_description';
import type { lists_components_schemas_name } from '../models/lists_components_schemas_name';
import type { lists_response_collection } from '../models/lists_response_collection';
import type { schemas_operation_id } from '../models/schemas_operation_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ListsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get lists
     * Fetches all lists in the account.
     * @returns lists_response_collection Get lists response
     * @throws ApiError
     */
    public listsGetLists({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<lists_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/rules/lists',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create a list
     * Creates a new list of the specified type.
     * @returns list_response_collection Create a list response
     * @throws ApiError
     */
    public listsCreateAList({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            description?: lists_components_schemas_description;
            kind: kind;
            name: lists_components_schemas_name;
        },
    }): CancelablePromise<list_response_collection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/rules/lists',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get bulk operation status
     * Gets the current status of an asynchronous operation on a list.
     *
     * The `status` property can have one of the following values: `pending`, `running`, `completed`, or `failed`. If the status is `failed`, the `error` property will contain a message describing the error.
     * @returns bulk_operation_response_collection Get bulk operation status response
     * @throws ApiError
     */
    public listsGetBulkOperationStatus({
        operationId,
        accountIdentifier,
    }: {
        operationId: schemas_operation_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<bulk_operation_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/rules/lists/bulk_operations/{operation_id}',
            path: {
                'operation_id': operationId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Delete a list
     * Deletes a specific list and all its items.
     * @returns list_delete_response_collection Delete a list response
     * @throws ApiError
     */
    public listsDeleteAList({
        listId,
        accountIdentifier,
        requestBody,
    }: {
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<list_delete_response_collection> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}',
            path: {
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a list
     * Fetches the details of a list.
     * @returns list_response_collection Get a list response
     * @throws ApiError
     */
    public listsGetAList({
        listId,
        accountIdentifier,
    }: {
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<list_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}',
            path: {
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update a list
     * Updates the description of a list.
     * @returns list_response_collection Update a list response
     * @throws ApiError
     */
    public listsUpdateAList({
        listId,
        accountIdentifier,
        requestBody,
    }: {
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            description?: lists_components_schemas_description;
        },
    }): CancelablePromise<list_response_collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}',
            path: {
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete list items
     * Removes one or more items from a list.
     *
     * This operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](#lists-get-bulk-operation-status) endpoint with the returned `operation_id`.
     * @returns lists_async_response Delete list items response
     * @throws ApiError
     */
    public listsDeleteListItems({
        listId,
        accountIdentifier,
        requestBody,
    }: {
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            items?: Array<any>;
        },
    }): CancelablePromise<lists_async_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}/items',
            path: {
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list items
     * Fetches all the items in the list.
     * @returns items_list_response_collection Get list items response
     * @throws ApiError
     */
    public listsGetListItems({
        listId,
        accountIdentifier,
    }: {
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<items_list_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}/items',
            path: {
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create list items
     * Appends new items to the list.
     *
     * This operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](#lists-get-bulk-operation-status) endpoint with the returned `operation_id`.
     * @returns lists_async_response Create list items response
     * @throws ApiError
     */
    public listsCreateListItems({
        listId,
        accountIdentifier,
        requestBody,
    }: {
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: items_update_request_collection,
    }): CancelablePromise<lists_async_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}/items',
            path: {
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update all list items
     * Removes all existing items from the list and adds the provided items to the list.
     *
     * This operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](#lists-get-bulk-operation-status) endpoint with the returned `operation_id`.
     * @returns lists_async_response Update all list items response
     * @throws ApiError
     */
    public listsUpdateAllListItems({
        listId,
        accountIdentifier,
        requestBody,
    }: {
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: items_update_request_collection,
    }): CancelablePromise<lists_async_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}/items',
            path: {
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a list item
     * Fetches a list item in the list.
     * @returns item_response_collection Get a list item response
     * @throws ApiError
     */
    public listsGetAListItem({
        itemId,
        listId,
        accountIdentifier,
    }: {
        itemId: item_id,
        listId: list_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<item_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/rules/lists/{list_id}/items/{item_id}',
            path: {
                'item_id': itemId,
                'list_id': listId,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
