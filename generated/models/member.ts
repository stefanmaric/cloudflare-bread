/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { code } from './code';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { email } from './email';
import type { first_name } from './first_name';
import type { last_name } from './last_name';
import type { membership_components_schemas_identifier } from './membership_components_schemas_identifier';
import type { role } from './role';
import type { two_factor_authentication_enabled } from './two_factor_authentication_enabled';

export type member = {
    code?: code;
    id: membership_components_schemas_identifier;
    /**
     * Roles assigned to this member.
     */
    roles: Array<role>;
    readonly status: any;
    readonly user: {
        email: email;
        first_name?: first_name;
        id?: common_components_schemas_identifier;
        last_name?: last_name;
        two_factor_authentication_enabled?: two_factor_authentication_enabled;
    };
};

