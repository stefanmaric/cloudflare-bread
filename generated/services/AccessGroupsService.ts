/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { groups_components_schemas_id_response } from '../models/groups_components_schemas_id_response';
import type { groups_components_schemas_response_collection } from '../models/groups_components_schemas_response_collection';
import type { groups_components_schemas_single_response } from '../models/groups_components_schemas_single_response';
import type { schemas_uuid } from '../models/schemas_uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessGroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Access groups
     * Lists all Access groups.
     * @returns groups_components_schemas_response_collection List Access groups response
     * @throws ApiError
     */
    public accessGroupsListAccessGroups({
        identifier,
    }: {
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<groups_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/groups',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create an Access group
     * Creates a new Access group.
     * @returns groups_components_schemas_single_response Create an Access group response
     * @throws ApiError
     */
    public accessGroupsCreateAnAccessGroup({
        identifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<groups_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/groups',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an Access group
     * Deletes an Access group.
     * @returns groups_components_schemas_id_response Delete an Access group response
     * @throws ApiError
     */
    public accessGroupsDeleteAnAccessGroup({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: schemas_uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<groups_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/access/groups/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get an Access group
     * Fetches a single Access group.
     * @returns groups_components_schemas_single_response Get an Access group response
     * @throws ApiError
     */
    public accessGroupsGetAnAccessGroup({
        uuid,
        identifier,
    }: {
        uuid: schemas_uuid,
        identifier: common_components_schemas_identifier,
    }): CancelablePromise<groups_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/groups/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update an Access group
     * Updates a configured Access group.
     * @returns groups_components_schemas_single_response Update an Access group response
     * @throws ApiError
     */
    public accessGroupsUpdateAnAccessGroup({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: schemas_uuid,
        identifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<groups_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/access/groups/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
