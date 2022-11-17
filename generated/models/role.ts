/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { permissions } from './permissions';
import type { role_components_schemas_identifier } from './role_components_schemas_identifier';

export type role = {
    /**
     * Description of role's permissions.
     */
    readonly description: string;
    id: role_components_schemas_identifier;
    /**
     * Role name.
     */
    readonly name: string;
    permissions: permissions;
};

