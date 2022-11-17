/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_name } from './components_schemas_name';
import type { description } from './description';
import type { role_components_schemas_identifier } from './role_components_schemas_identifier';
import type { schemas_permissions } from './schemas_permissions';

export type schemas_role = {
    description: description;
    id: role_components_schemas_identifier;
    name: components_schemas_name;
    permissions: schemas_permissions;
};

