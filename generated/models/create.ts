/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { email } from './email';
import type { role_components_schemas_identifier } from './role_components_schemas_identifier';

export type create = {
    email: email;
    /**
     * Array of roles associated with this member.
     */
    roles: Array<role_components_schemas_identifier>;
    status?: 'accepted' | 'pending';
};

