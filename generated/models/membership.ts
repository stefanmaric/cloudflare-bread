/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_access_enabled } from './api_access_enabled';
import type { code } from './code';
import type { membership_components_schemas_identifier } from './membership_components_schemas_identifier';
import type { permissions } from './permissions';
import type { roles } from './roles';
import type { schemas_account } from './schemas_account';
import type { schemas_status } from './schemas_status';

export type membership = {
    account?: schemas_account;
    api_access_enabled?: api_access_enabled;
    code?: code;
    id?: membership_components_schemas_identifier;
    /**
     * All access permissions for the user at the account.
     */
    readonly permissions?: permissions;
    roles?: roles;
    status?: schemas_status;
};

