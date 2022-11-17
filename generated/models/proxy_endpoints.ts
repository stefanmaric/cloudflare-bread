/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_ips } from './components_schemas_ips';
import type { proxy_endpoints_components_schemas_name } from './proxy_endpoints_components_schemas_name';
import type { proxy_endpoints_components_schemas_uuid } from './proxy_endpoints_components_schemas_uuid';
import type { schemas_subdomain } from './schemas_subdomain';
import type { timestamp } from './timestamp';

export type proxy_endpoints = {
    created_at?: timestamp;
    id?: proxy_endpoints_components_schemas_uuid;
    ips?: components_schemas_ips;
    name?: proxy_endpoints_components_schemas_name;
    subdomain?: schemas_subdomain;
    updated_at?: timestamp;
};

