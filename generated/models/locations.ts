/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { client_default } from './client_default';
import type { ecs_support } from './ecs_support';
import type { locations_components_schemas_ip } from './locations_components_schemas_ip';
import type { locations_components_schemas_name } from './locations_components_schemas_name';
import type { locations_components_schemas_uuid } from './locations_components_schemas_uuid';
import type { network } from './network';
import type { subdomain } from './subdomain';
import type { timestamp } from './timestamp';

export type locations = {
    client_default?: client_default;
    created_at?: timestamp;
    doh_subdomain?: subdomain;
    ecs_support?: ecs_support;
    id?: locations_components_schemas_uuid;
    ip?: locations_components_schemas_ip;
    name?: locations_components_schemas_name;
    networks?: network;
    updated_at?: timestamp;
};

