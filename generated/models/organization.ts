/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { components_schemas_status } from './components_schemas_status';
import type { schemas_name } from './schemas_name';
import type { schemas_permissions } from './schemas_permissions';

export type organization = {
    id?: common_components_schemas_identifier;
    name?: schemas_name;
    permissions?: schemas_permissions;
    /**
     * List of roles that a user has within an organization.
     */
    readonly roles?: Array<string>;
    status?: components_schemas_status;
};

