/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { rules_components_schemas_empty_response } from '../models/rules_components_schemas_empty_response';
import type { rules_components_schemas_identifier } from '../models/rules_components_schemas_identifier';
import type { rules_components_schemas_response_collection } from '../models/rules_components_schemas_response_collection';
import type { rules_components_schemas_single_response } from '../models/rules_components_schemas_single_response';
import type { rules_components_schemas_uuid } from '../models/rules_components_schemas_uuid';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZeroTrustGatewayRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Zero Trust Gateway Rules
     * List Zero Trust Gateway Rules for an account.
     * @returns rules_components_schemas_response_collection List Zero Trust Gateway Rules response
     * @throws ApiError
     */
    public zeroTrustGatewayRulesListZeroTrustGatewayRules({
        identifier,
    }: {
        identifier: rules_components_schemas_identifier,
    }): CancelablePromise<rules_components_schemas_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/rules',
            path: {
                'identifier': identifier,
            },
        });
    }

    /**
     * Create Zero Trust Gateway Rule
     * Create a new Zero Trust Gateway Rule.
     * @returns rules_components_schemas_single_response Create Zero Trust Gateway Rule response
     * @throws ApiError
     */
    public zeroTrustGatewayRulesCreateZeroTrustGatewayRule({
        identifier,
        requestBody,
    }: {
        identifier: rules_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rules_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{identifier}/gateway/rules',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Zero Trust Gateway Rule
     * Delete a Zero Trust Gateway Rule.
     * @returns rules_components_schemas_empty_response Delete Zero Trust Gateway Rule response
     * @throws ApiError
     */
    public zeroTrustGatewayRulesDeleteZeroTrustGatewayRule({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: rules_components_schemas_uuid,
        identifier: rules_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rules_components_schemas_empty_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{identifier}/gateway/rules/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
        });
    }

    /**
     * Zero Trust Gateway Rule Details
     * Fetch a single Zero Trust Gateway Rule.
     * @returns rules_components_schemas_single_response Zero Trust Gateway Rule Details response
     * @throws ApiError
     */
    public zeroTrustGatewayRulesZeroTrustGatewayRuleDetails({
        uuid,
        identifier,
    }: {
        uuid: rules_components_schemas_uuid,
        identifier: rules_components_schemas_identifier,
    }): CancelablePromise<rules_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{identifier}/gateway/rules/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
        });
    }

    /**
     * Update Zero Trust Gateway Rule
     * Update a configured Zero Trust Gateway Rule.
     * @returns rules_components_schemas_single_response Update Zero Trust Gateway Rule response
     * @throws ApiError
     */
    public zeroTrustGatewayRulesUpdateZeroTrustGatewayRule({
        uuid,
        identifier,
        requestBody,
    }: {
        uuid: rules_components_schemas_uuid,
        identifier: rules_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<rules_components_schemas_single_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{identifier}/gateway/rules/{uuid}',
            path: {
                'uuid': uuid,
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
