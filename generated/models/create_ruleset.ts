/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { create_update_rules } from './create_update_rules';
import type { phase } from './phase';
import type { rulesets_components_schemas_description } from './rulesets_components_schemas_description';
import type { rulesets_components_schemas_name } from './rulesets_components_schemas_name';
import type { schemas_kind } from './schemas_kind';

/**
 * A ruleset object.
 */
export type create_ruleset = {
    description?: rulesets_components_schemas_description;
    kind: schemas_kind;
    name: rulesets_components_schemas_name;
    phase: phase;
    rules: create_update_rules;
};

