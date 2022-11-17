/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single } from '../models/api_response_single';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { schemas_phase } from '../models/schemas_phase';
import type { schemas_ruleset } from '../models/schemas_ruleset';
import type { update_ruleset } from '../models/update_ruleset';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TransformRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Transform Rules
     * Fetches all Transform Rules in a zone.
     * @returns schemas_ruleset List Transform Rules response
     * @throws ApiError
     */
    public transformRulesListTransformRules({
        phase,
        zoneId,
    }: {
        phase: schemas_phase,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<schemas_ruleset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/phases/{phase}/entrypoint',
            path: {
                'phase': phase,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update Transform Rules
     * Updates the Transform Rules of a zone.
     * @returns api_response_single Update Transform Rules response
     * @throws ApiError
     */
    public transformRulesUpdateTransformRules({
        phase,
        zoneId,
        requestBody,
    }: {
        phase: schemas_phase,
        zoneId: common_components_schemas_identifier,
        requestBody: update_ruleset,
    }): CancelablePromise<api_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/rulesets/phases/{phase}/entrypoint',
            path: {
                'phase': phase,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
