/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { action_parameters } from './action_parameters';
import type { components_schemas_ref } from './components_schemas_ref';
import type { logging } from './logging';
import type { rules_components_schemas_action } from './rules_components_schemas_action';
import type { rules_components_schemas_description } from './rules_components_schemas_description';
import type { rules_components_schemas_enabled_2 } from './rules_components_schemas_enabled_2';
import type { schemas_expression } from './schemas_expression';

/**
 * A rule object.
 */
export type create_update_rule = {
    action: rules_components_schemas_action;
    action_parameters?: action_parameters;
    description?: rules_components_schemas_description;
    enabled?: rules_components_schemas_enabled_2;
    expression: schemas_expression;
    logging?: logging;
    ref?: components_schemas_ref;
};

