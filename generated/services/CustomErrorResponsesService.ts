/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { components_schemas_ruleset } from '../models/components_schemas_ruleset';
import type { update_ruleset } from '../models/update_ruleset';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomErrorResponsesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Custom Error Responses
     * Fetches all Custom Error Responses in a zone.
     * @returns components_schemas_ruleset Get Custom Error Responses response
     * @throws ApiError
     */
    public customErrorResponsesGetCustomErrorResponses({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<components_schemas_ruleset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/phases/http_custom_errors/entrypoint',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update Custom Error Responses
     * Updates the Custom Error Responses of a zone.
     * @returns api_response_single Update Custom Error Responses response
     * @throws ApiError
     */
    public customErrorResponsesUpdateCustomErrorResponses({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: update_ruleset,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/rulesets/phases/http_custom_errors/entrypoint',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
