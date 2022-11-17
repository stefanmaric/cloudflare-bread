/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apps_components_schemas_id_response } from '../models/apps_components_schemas_id_response';
import type { apps_components_schemas_identifier } from '../models/apps_components_schemas_identifier';
import type { apps_components_schemas_response_collection_2 } from '../models/apps_components_schemas_response_collection_2';
import type { apps_components_schemas_single_response_2 } from '../models/apps_components_schemas_single_response_2';
import type { components_schemas_empty_response } from '../models/components_schemas_empty_response';
import type { policy_check_response } from '../models/policy_check_response';
import type { schemas_app_id } from '../models/schemas_app_id';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneLevelAccessApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Access Applications
     * List all Access Applications in a zone.
     * @returns apps_components_schemas_response_collection_2 List Access Applications response
     * @throws ApiError
     */
    public zoneLevelAccessApplicationsListAccessApplications({
        identifier,
    }: {
        identifier: apps_components_schemas_identifier,
    }): CancelablePromise<apps_components_schemas_response_collection_2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/apps',
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
    public zoneLevelAccessApplicationsAddABookmarkApplication({
        identifier,
        requestBody,
    }: {
        identifier: apps_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<apps_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/access/apps',
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
    public zoneLevelAccessApplicationsDeleteAnAccessApplication({
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
            url: '/zones/{identifier}/access/apps/{app_id}',
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
     * @returns apps_components_schemas_single_response_2 Get an Access application response
     * @throws ApiError
     */
    public zoneLevelAccessApplicationsGetAnAccessApplication({
        appId,
        identifier,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
    }): CancelablePromise<apps_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/apps/{app_id}',
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
    public zoneLevelAccessApplicationsUpdateABookmarkApplication({
        appId,
        identifier,
        requestBody,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<apps_components_schemas_single_response_2> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier}/access/apps/{app_id}',
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
    public zoneLevelAccessApplicationsRevokeServiceTokens({
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
            url: '/zones/{identifier}/access/apps/{app_id}/revoke_tokens',
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
    public zoneLevelAccessApplicationsTestAccessPolicies({
        appId,
        identifier,
    }: {
        appId: schemas_app_id,
        identifier: apps_components_schemas_identifier,
    }): CancelablePromise<policy_check_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/apps/{app_id}/user_policy_checks',
            path: {
                'app_id': appId,
                'identifier': identifier,
            },
        });
    }

}
