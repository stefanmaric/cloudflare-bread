/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { railgun_components_schemas_identifier } from '../models/railgun_components_schemas_identifier';
import type { railgun_components_schemas_name } from '../models/railgun_components_schemas_name';
import type { railgun_response_collection } from '../models/railgun_response_collection';
import type { railgun_response_single } from '../models/railgun_response_single';
import type { railgun_response_single_id } from '../models/railgun_response_single_id';
import type { schemas_railgun } from '../models/schemas_railgun';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountRailgunsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Railguns
     * List, search, sort and filter your Railguns.
     * @returns railgun_response_collection List Railguns response
     * @throws ApiError
     */
    public accountRailgunsListRailguns({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<railgun_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/railguns',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Create Railgun
     * @returns railgun_response_single Create Railgun response
     * @throws ApiError
     */
    public accountRailgunsCreateRailgun({
        accountIdentifier,
        requestBody,
    }: {
        accountIdentifier: common_components_schemas_identifier,
        requestBody: {
            name: railgun_components_schemas_name;
        },
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_identifier}/railguns',
            path: {
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Railgun
     * Disable and delete a Railgun. This will immediately disable the Railgun for any connected zones.
     * @returns railgun_response_single_id Delete a Railgun response
     * @throws ApiError
     */
    public accountRailgunsDeleteARailgun({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<railgun_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Railgun details
     * @returns railgun_response_single Railgun details response
     * @throws ApiError
     */
    public accountRailgunsRailgunDetails({
        identifier,
        accountIdentifier,
    }: {
        identifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update Railgun
     * Update a Railgun.
     * @returns railgun_response_single Update Railgun response
     * @throws ApiError
     */
    public accountRailgunsUpdateRailgun({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: railgun_components_schemas_identifier,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: schemas_railgun,
    }): CancelablePromise<railgun_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/railguns/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
