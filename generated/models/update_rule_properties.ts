/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { actions } from './actions';
import type { components_schemas_priority } from './components_schemas_priority';
import type { matchers } from './matchers';
import type { rules_components_schemas_enabled } from './rules_components_schemas_enabled';
import type { rules_components_schemas_name } from './rules_components_schemas_name';

export type update_rule_properties = {
    actions: actions;
    enabled?: rules_components_schemas_enabled;
    matchers: matchers;
    name?: rules_components_schemas_name;
    priority?: components_schemas_priority;
};

