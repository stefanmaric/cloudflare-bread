/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_components_schemas_identifier } from '../models/common_components_schemas_identifier';
import type { create_ruleset } from '../models/create_ruleset';
import type { create_update_rule } from '../models/create_update_rule';
import type { phase } from '../models/phase';
import type { rules_components_schemas_id } from '../models/rules_components_schemas_id';
import type { ruleset_response } from '../models/ruleset_response';
import type { rulesets_components_schemas_id } from '../models/rulesets_components_schemas_id';
import type { rulesets_response } from '../models/rulesets_response';
import type { update_ruleset } from '../models/update_ruleset';
import type { version } from '../models/version';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoneRulesetsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List zone rulesets
     * Fetches all rulesets at the zone level.
     * @returns rulesets_response List zone rulesets response
     * @throws ApiError
     */
    public zoneRulesetsListZoneRulesets({
        zoneId,
    }: {
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<rulesets_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Create a zone ruleset
     * Creates a ruleset at the zone level.
     * @returns ruleset_response Create a zone ruleset response
     * @throws ApiError
     */
    public zoneRulesetsCreateAZoneRuleset({
        zoneId,
        requestBody,
    }: {
        zoneId: common_components_schemas_identifier,
        requestBody: create_ruleset,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_id}/rulesets',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a zone entry point ruleset
     * Fetches the latest version of the zone entry point ruleset for a given phase.
     * @returns ruleset_response Get a zone entry point ruleset response
     * @throws ApiError
     */
    public zoneRulesetsGetAZoneEntryPointRuleset({
        rulesetPhase,
        zoneId,
    }: {
        rulesetPhase: phase,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint',
            path: {
                'ruleset_phase': rulesetPhase,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update a zone entry point ruleset
     * Updates a zone entry point ruleset, creating a new version.
     * @returns ruleset_response Update a zone entry point ruleset response
     * @throws ApiError
     */
    public zoneRulesetsUpdateAZoneEntryPointRuleset({
        rulesetPhase,
        zoneId,
        requestBody,
    }: {
        rulesetPhase: phase,
        zoneId: common_components_schemas_identifier,
        requestBody: update_ruleset,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint',
            path: {
                'ruleset_phase': rulesetPhase,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List a zone entry point ruleset's versions
     * Fetches the versions of a zone entry point ruleset.
     * @returns rulesets_response List a zone entry point ruleset's versions response
     * @throws ApiError
     */
    public zoneRulesetsListAZoneEntryPointRulesetSVersions({
        rulesetPhase,
        zoneId,
    }: {
        rulesetPhase: phase,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<rulesets_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/phases/{ruleset_phase}/versions',
            path: {
                'ruleset_phase': rulesetPhase,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Get a zone entry point ruleset version
     * Fetches a specific version of a zone entry point ruleset.
     * @returns ruleset_response Get a zone entry point ruleset version response
     * @throws ApiError
     */
    public zoneRulesetsGetAZoneEntryPointRulesetVersion({
        rulesetVersion,
        rulesetPhase,
        zoneId,
    }: {
        rulesetVersion: version,
        rulesetPhase: phase,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/phases/{ruleset_phase}/versions/{ruleset_version}',
            path: {
                'ruleset_version': rulesetVersion,
                'ruleset_phase': rulesetPhase,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Delete a zone ruleset
     * Deletes all versions of an existing zone ruleset.
     * @returns any Delete a zone ruleset response
     * @throws ApiError
     */
    public zoneRulesetsDeleteAZoneRuleset({
        rulesetId,
        zoneId,
        requestBody,
    }: {
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}',
            path: {
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
            body: requestBody,
        });
    }

    /**
     * Get a zone ruleset
     * Fetches the latest version of a zone ruleset.
     * @returns ruleset_response Get a zone ruleset response
     * @throws ApiError
     */
    public zoneRulesetsGetAZoneRuleset({
        rulesetId,
        zoneId,
    }: {
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}',
            path: {
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Update a zone ruleset
     * Updates a zone ruleset, creating a new version.
     * @returns ruleset_response Update a zone ruleset response
     * @throws ApiError
     */
    public zoneRulesetsUpdateAZoneRuleset({
        rulesetId,
        zoneId,
        requestBody,
    }: {
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
        requestBody: update_ruleset,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}',
            path: {
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a zone ruleset rule
     * Adds a new rule to a zone ruleset. The rule will be added to the end of the existing list of rules in the ruleset.
     * @returns ruleset_response Create a zone ruleset rule response
     * @throws ApiError
     */
    public zoneRulesetsCreateAZoneRulesetRule({
        rulesetId,
        zoneId,
        requestBody,
    }: {
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
        requestBody: create_update_rule,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}/rules',
            path: {
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a zone ruleset rule
     * Deletes an existing rule from a zone ruleset.
     * @returns ruleset_response Delete a zone ruleset rule response
     * @throws ApiError
     */
    public zoneRulesetsDeleteAZoneRulesetRule({
        ruleId,
        rulesetId,
        zoneId,
        requestBody,
    }: {
        ruleId: rules_components_schemas_id,
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}/rules/{rule_id}',
            path: {
                'rule_id': ruleId,
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
            body: requestBody,
        });
    }

    /**
     * Update a zone ruleset rule
     * Updates an existing rule in a zone ruleset.
     * @returns ruleset_response Update a zone ruleset rule response
     * @throws ApiError
     */
    public zoneRulesetsUpdateAZoneRulesetRule({
        ruleId,
        rulesetId,
        zoneId,
        requestBody,
    }: {
        ruleId: rules_components_schemas_id,
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
        requestBody: create_update_rule,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}/rules/{rule_id}',
            path: {
                'rule_id': ruleId,
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List a zone ruleset's versions
     * Fetches the versions of a zone ruleset.
     * @returns rulesets_response List a zone ruleset's versions response
     * @throws ApiError
     */
    public zoneRulesetsListAZoneRulesetSVersions({
        rulesetId,
        zoneId,
    }: {
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<rulesets_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}/versions',
            path: {
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
        });
    }

    /**
     * Delete a zone ruleset version
     * Deletes an existing version of a zone ruleset.
     * @returns any Delete a zone ruleset version response
     * @throws ApiError
     */
    public zoneRulesetsDeleteAZoneRulesetVersion({
        rulesetVersion,
        rulesetId,
        zoneId,
        requestBody,
    }: {
        rulesetVersion: version,
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}',
            path: {
                'ruleset_version': rulesetVersion,
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
            body: requestBody,
        });
    }

    /**
     * Get a zone ruleset version
     * Fetches a specific version of a zone ruleset.
     * @returns ruleset_response Get a zone ruleset version response
     * @throws ApiError
     */
    public zoneRulesetsGetAZoneRulesetVersion({
        rulesetVersion,
        rulesetId,
        zoneId,
    }: {
        rulesetVersion: version,
        rulesetId: rulesets_components_schemas_id,
        zoneId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/zones/{zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}',
            path: {
                'ruleset_version': rulesetVersion,
                'ruleset_id': rulesetId,
                'zone_id': zoneId,
            },
        });
    }

}
