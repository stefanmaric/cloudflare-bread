/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { last_updated } from './last_updated';
import type { phase } from './phase';
import type { rulesets_components_schemas_description } from './rulesets_components_schemas_description';
import type { rulesets_components_schemas_id } from './rulesets_components_schemas_id';
import type { rulesets_components_schemas_name } from './rulesets_components_schemas_name';
import type { schemas_kind } from './schemas_kind';
import type { version } from './version';

/**
 * A ruleset object.
 */
export type ruleset_without_rules = {
    description?: rulesets_components_schemas_description;
    id?: rulesets_components_schemas_id;
    kind?: schemas_kind;
    last_updated?: last_updated;
    name?: rulesets_components_schemas_name;
    phase?: phase;
    version?: version;
};

