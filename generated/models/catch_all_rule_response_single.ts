/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { catchall_actions } from './catchall_actions';
import type { catchall_matchers } from './catchall_matchers';
import type { rule_identifier } from './rule_identifier';
import type { rules_components_schemas_enabled } from './rules_components_schemas_enabled';
import type { rules_components_schemas_name } from './rules_components_schemas_name';

export type catch_all_rule_response_single = {
    actions?: catchall_actions;
    enabled?: rules_components_schemas_enabled;
    matchers?: catchall_matchers;
    name?: rules_components_schemas_name;
    tag?: rule_identifier;
};

