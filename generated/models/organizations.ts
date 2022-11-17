/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { auth_domain } from './auth_domain';
import type { is_ui_read_only } from './is_ui_read_only';
import type { login_design } from './login_design';
import type { organizations_components_schemas_name } from './organizations_components_schemas_name';
import type { timestamp } from './timestamp';

export type organizations = {
    auth_domain?: auth_domain;
    created_at?: timestamp;
    is_ui_read_only?: is_ui_read_only;
    login_design?: login_design;
    name?: organizations_components_schemas_name;
    updated_at?: timestamp;
};

