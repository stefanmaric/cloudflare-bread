/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { created_on } from './created_on';
import type { page_rule_components_schemas_modified_on } from './page_rule_components_schemas_modified_on';
import type { page_rule_components_schemas_priority } from './page_rule_components_schemas_priority';
import type { page_rule_components_schemas_status } from './page_rule_components_schemas_status';
import type { schemas_actions } from './schemas_actions';
import type { targets } from './targets';

export type page_rule = {
    actions: schemas_actions;
    created_on: created_on;
    id: common_components_schemas_identifier;
    modified_on: page_rule_components_schemas_modified_on;
    priority: page_rule_components_schemas_priority;
    status: page_rule_components_schemas_status;
    targets: targets;
};

