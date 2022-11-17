/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_response_single_id } from '../models/api_response_single_id';
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { page_rule_components_schemas_priority } from '../models/page_rule_components_schemas_priority';
import type { page_rule_components_schemas_status } from '../models/page_rule_components_schemas_status';
import type { pagerule_response_collection } from '../models/pagerule_response_collection';
import type { pagerule_response_single } from '../models/pagerule_response_single';
import type { schemas_actions } from '../models/schemas_actions';
import type { targets } from '../models/targets';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PageRulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Page Rules
     * Fetches Page Rules in a zone.
     * @returns pagerule_response_collection List Page Rules response
     * @throws ApiError
     */
    public pageRulesListPageRules({
        zoneIdentifier,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pagerule_response_collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/pagerules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Create a Page Rule
     * Creates a new Page Rule.
     * @returns pagerule_response_single Create a Page Rule response
     * @throws ApiError
     */
    public pageRulesCreateAPageRule({
        zoneIdentifier,
        requestBody,
    }: {
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            actions: schemas_actions;
            priority?: page_rule_components_schemas_priority;
            status?: page_rule_components_schemas_status;
            targets: targets;
        },
    }): CancelablePromise<pagerule_response_single> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_identifier}/pagerules',
            path: {
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Page Rule
     * Deletes an existing Page Rule.
     * @returns api_response_single_id Delete a Page Rule response
     * @throws ApiError
     */
    public pageRulesDeleteAPageRule({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<api_response_single_id> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_identifier}/pagerules/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
        });
    }

    /**
     * Get a Page Rule
     * Fetches the details of a Page Rule.
     * @returns pagerule_response_single Get a Page Rule response
     * @throws ApiError
     */
    public pageRulesGetAPageRule({
        identifier,
        zoneIdentifier,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
    }): CancelablePromise<pagerule_response_single> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_identifier}/pagerules/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
        });
    }

    /**
     * Edit a Page Rule
     * Updates one or more fields of an existing Page Rule.
     * @returns pagerule_response_single Edit a Page Rule response
     * @throws ApiError
     */
    public pageRulesEditAPageRule({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            actions?: schemas_actions;
            priority?: page_rule_components_schemas_priority;
            status?: page_rule_components_schemas_status;
            targets?: targets;
        },
    }): CancelablePromise<pagerule_response_single> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_identifier}/pagerules/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update a Page Rule
     * Replaces the configuration of an existing Page Rule. The configuration of the updated Page Rule will exactly match the data passed in the API request.
     * @returns pagerule_response_single Update a Page Rule response
     * @throws ApiError
     */
    public pageRulesUpdateAPageRule({
        identifier,
        zoneIdentifier,
        requestBody,
    }: {
        identifier: common_components_schemas_identifier,
        zoneIdentifier: common_components_schemas_identifier,
        requestBody: {
            actions: schemas_actions;
            priority?: page_rule_components_schemas_priority;
            status?: page_rule_components_schemas_status;
            targets: targets;
        },
    }): CancelablePromise<pagerule_response_single> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_identifier}/pagerules/{identifier}',
            path: {
                'identifier': identifier,
                'zone_identifier': zoneIdentifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
