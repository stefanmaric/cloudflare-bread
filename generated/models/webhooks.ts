/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_url } from './components_schemas_url';
import type { last_failure } from './last_failure';
import type { last_success } from './last_success';
import type { schemas_secret } from './schemas_secret';
import type { uuid } from './uuid';
import type { webhooks_components_schemas_created_at } from './webhooks_components_schemas_created_at';
import type { webhooks_components_schemas_name } from './webhooks_components_schemas_name';
import type { webhooks_components_schemas_type } from './webhooks_components_schemas_type';

export type webhooks = {
    created_at?: webhooks_components_schemas_created_at;
    id?: uuid;
    last_failure?: last_failure;
    last_success?: last_success;
    name?: webhooks_components_schemas_name;
    secret?: schemas_secret;
    type?: webhooks_components_schemas_type;
    url?: components_schemas_url;
};

