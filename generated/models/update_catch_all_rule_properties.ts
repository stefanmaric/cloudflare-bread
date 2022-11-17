/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { catchall_actions } from './catchall_actions';
import type { catchall_matchers } from './catchall_matchers';
import type { rules_components_schemas_enabled } from './rules_components_schemas_enabled';
import type { rules_components_schemas_name } from './rules_components_schemas_name';

export type update_catch_all_rule_properties = {
    actions: catchall_actions;
    enabled?: rules_components_schemas_enabled;
    matchers: catchall_matchers;
    name?: rules_components_schemas_name;
};

