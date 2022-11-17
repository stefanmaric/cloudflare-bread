/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { action_parameters } from './action_parameters';
import type { categories } from './categories';
import type { components_schemas_ref } from './components_schemas_ref';
import type { logging } from './logging';
import type { rules_components_schemas_action } from './rules_components_schemas_action';
import type { rules_components_schemas_description } from './rules_components_schemas_description';
import type { rules_components_schemas_enabled_2 } from './rules_components_schemas_enabled_2';
import type { rules_components_schemas_id } from './rules_components_schemas_id';
import type { schemas_expression } from './schemas_expression';
import type { schemas_last_updated } from './schemas_last_updated';
import type { schemas_version } from './schemas_version';

/**
 * A rule object.
 */
export type rules_components_schemas_rule = {
    action?: rules_components_schemas_action;
    action_parameters?: action_parameters;
    categories?: categories;
    description?: rules_components_schemas_description;
    enabled?: rules_components_schemas_enabled_2;
    expression?: schemas_expression;
    id?: rules_components_schemas_id;
    last_updated?: schemas_last_updated;
    logging?: logging;
    ref?: components_schemas_ref;
    version?: schemas_version;
};

