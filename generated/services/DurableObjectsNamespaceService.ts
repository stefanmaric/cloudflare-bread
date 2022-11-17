/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_collection } from '../models/api_response_collection';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { namespaces_components_schemas_id } from '../models/namespaces_components_schemas_id';
import type { _object } from '../models/_object';
import type { schemas_namespace } from '../models/schemas_namespace';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DurableObjectsNamespaceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Namespaces
     * Returns the namespaces owned by an account.
     * @returns any List Namespaces response
     * @throws ApiError
     */
    public durableObjectsNamespaceListNamespaces({
        accountIdentifier,
    }: {
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_collection & {
        result?: Array<schemas_namespace>;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/durable_objects/namespaces',
            path: {
                'account_identifier': accountIdentifier,
            },
        });
    }

    /**
     * List Objects
     * Returns the Durable Objects in a given namespace.
     * @returns any List Objects response
     * @throws ApiError
     */
    public durableObjectsNamespaceListObjects({
        id,
        accountIdentifier,
    }: {
        id: namespaces_components_schemas_id,
        accountIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<(api_response_collection & {
        result?: Array<_object>;
        result_info?: any;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_identifier}/workers/durable_objects/namespaces/{id}/objects',
            path: {
                'id': id,
                'account_identifier': accountIdentifier,
            },
        });
    }

}
