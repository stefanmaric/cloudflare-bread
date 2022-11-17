/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { access_requests_components_schemas_action } from './access_requests_components_schemas_action';
import type { app_domain } from './app_domain';
import type { app_uid } from './app_uid';
import type { components_schemas_connection } from './components_schemas_connection';
import type { components_schemas_ip } from './components_schemas_ip';
import type { ray_id } from './ray_id';
import type { schemas_allowed } from './schemas_allowed';
import type { schemas_email } from './schemas_email';
import type { timestamp } from './timestamp';

export type access_requests = {
    action?: access_requests_components_schemas_action;
    allowed?: schemas_allowed;
    app_domain?: app_domain;
    app_uid?: app_uid;
    connection?: components_schemas_connection;
    created_at?: timestamp;
    ip_address?: components_schemas_ip;
    ray_id?: ray_id;
    user_email?: schemas_email;
};

