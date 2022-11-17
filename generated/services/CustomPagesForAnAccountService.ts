/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { custom_pages_components_schemas_identifier_2 } from '../models/custom_pages_components_schemas_identifier_2';
import type { custom_pages_response_collection } from '../models/custom_pages_response_collection';
import type { custom_pages_response_single } from '../models/custom_pages_response_single';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomPagesForAnAccountService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List custom pages
     * Fetches all the custom pages at the account level.
     * @returns custom_pages_response_collection List custom pages response
     * @throws ApiError
     */
    public customPagesForAnAccountListCustomPages({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<custom_pages_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/custom_pages',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Get a custom page
     * Fetches the details of a custom page.
     * @returns custom_pages_response_single Get a custom page response
     * @throws ApiError
     */
    public customPagesForAnAccountGetACustomPage({
        identifier,
        accountIdentifier,
    }: {
        identifier: custom_pages_components_schemas_identifier_2,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<custom_pages_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/custom_pages/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * Update a custom page
     * Updates the configuration of an existing custom page.
     * @returns custom_pages_response_single Update a custom page response
     * @throws ApiError
     */
    public customPagesForAnAccountUpdateACustomPage({
        identifier,
        accountIdentifier,
        requestBody,
    }: {
        identifier: custom_pages_components_schemas_identifier_2,
        accountIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<custom_pages_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_identifier}/custom_pages/{identifier}',
            path: {
                'identifier': identifier,
                'account_identifier': accountIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
