/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_uuid } from '../models/components_schemas_uuid';
import type { policies_components_schemas_id_response } from '../models/policies_components_schemas_id_response';
import type { policies_components_schemas_identifier } from '../models/policies_components_schemas_identifier';
import type { policies_components_schemas_response_collection } from '../models/policies_components_schemas_response_collection';
import type { policies_components_schemas_single_response } from '../models/policies_components_schemas_single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneLevelAccessPoliciesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Delete an Access policy
     * Delete an Access policy.
     * @returns policies_components_schemas_id_response Delete an Access policy response
     * @throws ApiError
     */
    public zoneLevelAccessPoliciesDeleteAnAccessPolicy({
        uuid,
        uuid1,
        identifier,
        requestBody,
    }: {
        uuid: components_schemas_uuid,
        uuid1: components_schemas_uuid,
        identifier: policies_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<policies_components_schemas_id_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{identifier}/access/apps/{uuid1}/policies/{uuid}',
            path: {
                'uuid': uuid,
                'uuid1': uuid1,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get an Access policy
     * Fetches a single Access policy.
     * @returns policies_components_schemas_single_response Get an Access policy response
     * @throws ApiError
     */
    public zoneLevelAccessPoliciesGetAnAccessPolicy({
        uuid,
        uuid1,
        identifier,
    }: {
        uuid: components_schemas_uuid,
        uuid1: components_schemas_uuid,
        identifier: policies_components_schemas_identifier,
    }): CancelablePromise<policies_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/apps/{uuid1}/policies/{uuid}',
            path: {
                'uuid': uuid,
                'uuid1': uuid1,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update an Access policy
     * Update a configured Access policy.
     * @returns policies_components_schemas_single_response Update an Access policy response
     * @throws ApiError
     */
    public zoneLevelAccessPoliciesUpdateAnAccessPolicy({
        uuid,
        uuid1,
        identifier,
        requestBody,
    }: {
        uuid: components_schemas_uuid,
        uuid1: components_schemas_uuid,
        identifier: policies_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<policies_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{identifier}/access/apps/{uuid1}/policies/{uuid}',
            path: {
                'uuid': uuid,
                'uuid1': uuid1,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Access policies
     * Lists Access policies configured for an application.
     * @returns policies_components_schemas_response_collection List Access policies response
     * @throws ApiError
     */
    public zoneLevelAccessPoliciesListAccessPolicies({
        uuid,
        identifier,
    }: {
        uuid: components_schemas_uuid,
        identifier: policies_components_schemas_identifier,
    }): CancelablePromise<policies_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{identifier}/access/apps/{uuid}/policies',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Create an Access policy
     * Create a new Access policy for an application.
     * @returns policies_components_schemas_single_response Create an Access policy response
     * @throws ApiError
     */
    public zoneLevelAccessPoliciesCreateAnAccessPolicy({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: components_schemas_uuid,
        identifier: policies_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<policies_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{identifier}/access/apps/{uuid}/policies',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
