/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { request_list } from '../models/request_list';
import type { response_list } from '../models/response_list';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ManagedTransformsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Managed Transforms
     * Fetches a list of all Managed Transforms.
     * @returns any List Managed Transforms response
     * @throws ApiError
     */
    public managedTransformsListManagedTransforms({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<{
        managed_request_headers?: request_list;
        managed_response_headers?: request_list;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/managed_headers',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update status of Managed Transforms
     * Updates the status of one or more Managed Transforms.
     * @returns any Update status of Managed Transforms response
     * @throws ApiError
     */
    public managedTransformsUpdateStatusOfManagedTransforms({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: {
            managed_request_headers: request_list;
            managed_response_headers: request_list;
        },
    }): CancelablePromise<{
        managed_request_headers?: response_list;
        managed_response_headers?: response_list;
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_id}/managed_headers',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
