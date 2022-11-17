/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { email } from './email';
import type { member_components_schemas_name } from './member_components_schemas_name';
import type { schemas_role } from './schemas_role';

export type components_schemas_member = {
    email: email;
    id: common_components_schemas_identifier;
    name: member_components_schemas_name;
    /**
     * Roles assigned to this Member.
     */
    roles: Array<schemas_role>;
    /**
     * A member's status in the organization.
     */
    status: 'accepted' | 'invited';
};

