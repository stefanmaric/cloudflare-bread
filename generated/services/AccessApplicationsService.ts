/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apps_components_schemas_id_response } from '../models/apps_components_schemas_id_response';
import type { apps_components_schemas_identifier } from '../models/apps_components_schemas_identifier';
import type { apps_components_schemas_response_collection } from '../models/apps_components_schemas_response_collection';
import type { apps_components_schemas_single_response } from '../models/apps_components_schemas_single_response';
import type { components_schemas_empty_response } from '../models/components_schemas_empty_response';
import type { policy_check_response } from '../models/policy_check_response';
import type { schemas_app_id } from '../models/schemas_app_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Access applications
     * Lists all Access applications in an account.
     * @returns apps_components_schemas_response_collection List Access applications response
     * @throws ApiError
     */
    public accessApplicationsListAccessApplications({
        identifier,
    }: {
        identifier: apps_components_schemas_identifier,
    }): CancelablePromise<apps_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/apps',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Add a Bookmark application
     * Adds a custom link to the App Launcher. Bookmark applications are not protected by Access.
     * @returns any Add a Bookmark application response
     * @throws ApiError
     */
    public accessApplicationsAddABookmarkApplication({
        identifier,
        requestBody,
    }: {
        identifier: apps_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<apps_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/apps',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an Access application
     * Deletes an application from Access.
     * @returns apps_components_schemas_id_response Delete an Access application response
     * @throws ApiError
     */
    public accessApplicationsDeleteAnAccessApplication({
        appId,
        identifier,
        requestBody,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<apps_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/access/apps/{app_id}',
            path: {
                'app_id': appId,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get an Access application
     * Fetches information about an Access application.
     * @returns apps_components_schemas_single_response Get an Access application response
     * @throws ApiError
     */
    public accessApplicationsGetAnAccessApplication({
        appId,
        identifier,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
    }): CancelablePromise<apps_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/apps/{app_id}',
            path: {
                'app_id': appId,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update a Bookmark application
     * Updates a Bookmark application.
     * @returns any Update a Bookmark application response
     * @throws ApiError
     */
    public accessApplicationsUpdateABookmarkApplication({
        appId,
        identifier,
        requestBody,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<apps_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/access/apps/{app_id}',
            path: {
                'app_id': appId,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke service tokens
     * Revokes all service tokens used by an application.
     * @returns components_schemas_empty_response Revoke service tokens response
     * @throws ApiError
     */
    public accessApplicationsRevokeServiceTokens({
        appId,
        identifier,
        requestBody,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<components_schemas_empty_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/access/apps/{app_id}/revoke_tokens',
            path: {
                'app_id': appId,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Test Access policies
     * Tests if a specific user has permission to access an application.
     * @returns policy_check_response Test Access policies response
     * @throws ApiError
     */
    public accessApplicationsTestAccessPolicies({
        appId,
        identifier,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
    }): CancelablePromise<policy_check_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/access/apps/{app_id}/user_policy_checks',
            path: {
                'app_id': appId,
                'identifier': identifier,
            },
        });
    }

}
