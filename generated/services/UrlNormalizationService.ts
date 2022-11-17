/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_request_model } from '../models/schemas_request_model';
import type { schemas_response_model } from '../models/schemas_response_model';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UrlNormalizationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get URL normalization settings
     * Fetches the current URL normalization settings.
     * @returns schemas_response_model Get URL normalization settings response
     * @throws ApiError
     */
    public urlNormalizationGetUrlNormalizationSettings({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<schemas_response_model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/url_normalization',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update URL normalization settings
     * Updates the URL normalization settings.
     * @returns schemas_response_model Update URL normalization settings response
     * @throws ApiError
     */
    public urlNormalizationUpdateUrlNormalizationSettings({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: schemas_request_model,
    }): CancelablePromise<schemas_response_model> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/url_normalization',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
