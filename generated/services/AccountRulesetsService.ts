/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { category } from '../models/category';
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

export class AccountRulesetsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List account rulesets
     * Fetches all rulesets at the account level.
     * @returns rulesets_response List account rulesets response
     * @throws ApiError
     */
    public accountRulesetsListAccountRulesets({
        accountId,
    }: {
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<rulesets_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Create an account ruleset
     * Creates a ruleset at the account level.
     * @returns ruleset_response Create an account ruleset response
     * @throws ApiError
     */
    public accountRulesetsCreateAnAccountRuleset({
        accountId,
        requestBody,
    }: {
        accountId: common_components_schemas_identifier,
        requestBody: create_ruleset,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_id}/rulesets',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get an account entry point ruleset
     * Fetches the latest version of the account entry point ruleset for a given phase.
     * @returns ruleset_response Get an account entry point ruleset response
     * @throws ApiError
     */
    public accountRulesetsGetAnAccountEntryPointRuleset({
        rulesetPhase,
        accountId,
    }: {
        rulesetPhase: phase,
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint',
            path: {
                'ruleset_phase': rulesetPhase,
                'account_id': accountId,
            },
        });
    }

    /**
     * Update an account entry point ruleset
     * Updates an account entry point ruleset, creating a new version.
     * @returns ruleset_response Update an account entry point ruleset response
     * @throws ApiError
     */
    public accountRulesetsUpdateAnAccountEntryPointRuleset({
        rulesetPhase,
        accountId,
        requestBody,
    }: {
        rulesetPhase: phase,
        accountId: common_components_schemas_identifier,
        requestBody: update_ruleset,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint',
            path: {
                'ruleset_phase': rulesetPhase,
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List an account entry point ruleset's versions
     * Fetches the versions of an account entry point ruleset.
     * @returns rulesets_response List an account entry point ruleset's versions response
     * @throws ApiError
     */
    public accountRulesetsListAnAccountEntryPointRulesetSVersions({
        rulesetPhase,
        accountId,
    }: {
        rulesetPhase: phase,
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<rulesets_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets/phases/{ruleset_phase}/versions',
            path: {
                'ruleset_phase': rulesetPhase,
                'account_id': accountId,
            },
        });
    }

    /**
     * Get an account entry point ruleset version
     * Fetches a specific version of an account entry point ruleset.
     * @returns ruleset_response Get an account entry point ruleset version response
     * @throws ApiError
     */
    public accountRulesetsGetAnAccountEntryPointRulesetVersion({
        rulesetVersion,
        rulesetPhase,
        accountId,
    }: {
        rulesetVersion: version,
        rulesetPhase: phase,
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets/phases/{ruleset_phase}/versions/{ruleset_version}',
            path: {
                'ruleset_version': rulesetVersion,
                'ruleset_phase': rulesetPhase,
                'account_id': accountId,
            },
        });
    }

    /**
     * Delete an account ruleset
     * Deletes all versions of an existing account ruleset.
     * @returns any Delete an account ruleset response
     * @throws ApiError
     */
    public accountRulesetsDeleteAnAccountRuleset({
        rulesetId,
        accountId,
        requestBody,
    }: {
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}',
            path: {
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
            body: requestBody,
        });
    }

    /**
     * Get an account ruleset
     * Fetches the latest version of an account ruleset.
     * @returns ruleset_response Get an account ruleset response
     * @throws ApiError
     */
    public accountRulesetsGetAnAccountRuleset({
        rulesetId,
        accountId,
    }: {
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}',
            path: {
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
        });
    }

    /**
     * Update an account ruleset
     * Updates an account ruleset, creating a new version.
     * @returns ruleset_response Update an account ruleset response
     * @throws ApiError
     */
    public accountRulesetsUpdateAnAccountRuleset({
        rulesetId,
        accountId,
        requestBody,
    }: {
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
        requestBody: update_ruleset,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}',
            path: {
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create an account ruleset rule
     * Adds a new rule to an account ruleset. The rule will be added to the end of the existing list of rules in the ruleset.
     * @returns ruleset_response Create an account ruleset rule response
     * @throws ApiError
     */
    public accountRulesetsCreateAnAccountRulesetRule({
        rulesetId,
        accountId,
        requestBody,
    }: {
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
        requestBody: create_update_rule,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}/rules',
            path: {
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an account ruleset rule
     * Deletes an existing rule from an account ruleset.
     * @returns ruleset_response Delete an account ruleset rule response
     * @throws ApiError
     */
    public accountRulesetsDeleteAnAccountRulesetRule({
        ruleId,
        rulesetId,
        accountId,
        requestBody,
    }: {
        ruleId: rules_components_schemas_id,
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}/rules/{rule_id}',
            path: {
                'rule_id': ruleId,
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
            body: requestBody,
        });
    }

    /**
     * Update an account ruleset rule
     * Updates an existing rule in an account ruleset.
     * @returns ruleset_response Update an account ruleset rule response
     * @throws ApiError
     */
    public accountRulesetsUpdateAnAccountRulesetRule({
        ruleId,
        rulesetId,
        accountId,
        requestBody,
    }: {
        ruleId: rules_components_schemas_id,
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
        requestBody: create_update_rule,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}/rules/{rule_id}',
            path: {
                'rule_id': ruleId,
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List an account ruleset's versions
     * Fetches the versions of an account ruleset.
     * @returns rulesets_response List an account ruleset's versions response
     * @throws ApiError
     */
    public accountRulesetsListAnAccountRulesetSVersions({
        rulesetId,
        accountId,
    }: {
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<rulesets_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}/versions',
            path: {
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
        });
    }

    /**
     * Delete an account ruleset version
     * Deletes an existing version of an account ruleset.
     * @returns any Delete an account ruleset version response
     * @throws ApiError
     */
    public accountRulesetsDeleteAnAccountRulesetVersion({
        rulesetVersion,
        rulesetId,
        accountId,
        requestBody,
    }: {
        rulesetVersion: version,
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
        requestBody: any,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}',
            path: {
                'ruleset_version': rulesetVersion,
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
            body: requestBody,
        });
    }

    /**
     * Get an account ruleset version
     * Fetches a specific version of an account ruleset.
     * @returns ruleset_response Get an account ruleset version response
     * @throws ApiError
     */
    public accountRulesetsGetAnAccountRulesetVersion({
        rulesetVersion,
        rulesetId,
        accountId,
    }: {
        rulesetVersion: version,
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}',
            path: {
                'ruleset_version': rulesetVersion,
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
        });
    }

    /**
     * List an account ruleset version's rules by tag
     * Fetches the rules of a managed account ruleset version for a given tag.
     * @returns ruleset_response List an account ruleset version's rules by tag response
     * @throws ApiError
     */
    public accountRulesetsListAnAccountRulesetVersionSRulesByTag({
        ruleTag,
        rulesetVersion,
        rulesetId,
        accountId,
    }: {
        ruleTag: category,
        rulesetVersion: version,
        rulesetId: rulesets_components_schemas_id,
        accountId: common_components_schemas_identifier,
    }): CancelablePromise<ruleset_response> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}',
            path: {
                'rule_tag': ruleTag,
                'ruleset_version': rulesetVersion,
                'ruleset_id': rulesetId,
                'account_id': accountId,
            },
        });
    }

}
