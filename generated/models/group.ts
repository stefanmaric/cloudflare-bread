/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { group_components_schemas_description } from './group_components_schemas_description';
import type { group_components_schemas_identifier } from './group_components_schemas_identifier';
import type { group_components_schemas_name } from './group_components_schemas_name';
import type { modified_rules_count } from './modified_rules_count';
import type { package_components_schemas_identifier } from './package_components_schemas_identifier';
import type { rules_count } from './rules_count';

export type group = {
    description?: group_components_schemas_description;
    id?: group_components_schemas_identifier;
    modified_rules_count?: modified_rules_count;
    name?: group_components_schemas_name;
    package_id?: package_components_schemas_identifier;
    rules_count?: rules_count;
};

