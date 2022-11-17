/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { configuration } from '../models/configuration';
import type { default_response } from '../models/default_response';
import type { single_response } from '../models/single_response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApiShieldSettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve information about specific configuration properties
     * @returns single_response Retrieve information about specific configuration properties response
     * @throws ApiError
     */
    public apiShieldSettingsRetrieveInformationAboutSpecificConfigurationProperties({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/api_gateway/configuration',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Set configuration properties
     * @returns default_response Set configuration properties response
     * @throws ApiError
     */
    public apiShieldSettingsSetConfigurationProperties({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: configuration,
    }): CancelablePromise<default_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/api_gateway/configuration',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
