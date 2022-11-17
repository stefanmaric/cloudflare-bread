/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bookmarks_components_schemas_id_response } from '../models/bookmarks_components_schemas_id_response';
import type { bookmarks_components_schemas_identifier } from '../models/bookmarks_components_schemas_identifier';
import type { bookmarks_components_schemas_response_collection } from '../models/bookmarks_components_schemas_response_collection';
import type { bookmarks_components_schemas_single_response } from '../models/bookmarks_components_schemas_single_response';
import type { uuid } from '../models/uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessBookmarkApplicationsDeprecatedService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @deprecated
     * List Bookmark applications
     * Lists Bookmark applications.
     * @returns bookmarks_components_schemas_response_collection List Bookmark applications response
     * @throws ApiError
     */
    public accessBookmarkApplicationsDeprecatedListBookmarkApplications({
        identifier,
    }: {
        identifier: bookmarks_components_schemas_identifier,
    }): CancelablePromise<bookmarks_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/bookmarks',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * @deprecated
     * Delete a Bookmark application
     * Deletes a Bookmark application.
     * @returns bookmarks_components_schemas_id_response Delete a Bookmark application response
     * @throws ApiError
     */
    public accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: bookmarks_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<bookmarks_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/access/bookmarks/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * @deprecated
     * Get a Bookmark application
     * Fetches a single Bookmark application.
     * @returns bookmarks_components_schemas_single_response Get a Bookmark application response
     * @throws ApiError
     */
    public accessBookmarkApplicationsDeprecatedGetABookmarkApplication({
        uuid,
        identifier,
    }: {
        uuid: uuid,
        identifier: bookmarks_components_schemas_identifier,
    }): CancelablePromise<bookmarks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/bookmarks/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * @deprecated
     * Create a Bookmark application
     * Create a new Bookmark application.
     * @returns bookmarks_components_schemas_single_response Create a Bookmark application response
     * @throws ApiError
     */
    public accessBookmarkApplicationsDeprecatedCreateABookmarkApplication({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: bookmarks_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<bookmarks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/bookmarks/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * @deprecated
     * Update a Bookmark application
     * Updates a configured Bookmark application.
     * @returns bookmarks_components_schemas_single_response Update a Bookmark application response
     * @throws ApiError
     */
    public accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: uuid,
        identifier: bookmarks_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<bookmarks_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/access/bookmarks/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

}
