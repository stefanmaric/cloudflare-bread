/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { create_update_rules } from './create_update_rules';
import type { rulesets_components_schemas_description } from './rulesets_components_schemas_description';

/**
 * A ruleset object.
 */
export type update_ruleset = {
    description?: rulesets_components_schemas_description;
    rules: create_update_rules;
};

