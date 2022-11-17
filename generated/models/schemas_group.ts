/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { group } from './group';
import type { group_components_schemas_description } from './group_components_schemas_description';
import type { group_components_schemas_identifier } from './group_components_schemas_identifier';
import type { group_components_schemas_name } from './group_components_schemas_name';
import type { rules_count } from './rules_count';

export type schemas_group = (group & {
    description: group_components_schemas_description;
    id: group_components_schemas_identifier;
    name: group_components_schemas_name;
    rules_count: rules_count;
});

