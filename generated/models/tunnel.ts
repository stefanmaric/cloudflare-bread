/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { cloudflare_tunnel_components_schemas_created_at } from './cloudflare_tunnel_components_schemas_created_at';
import type { cloudflare_tunnel_components_schemas_status } from './cloudflare_tunnel_components_schemas_status';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { connections } from './connections';
import type { conns_active_at } from './conns_active_at';
import type { conns_inactive_at } from './conns_inactive_at';
import type { remote_config } from './remote_config';
import type { schemas_deleted_at } from './schemas_deleted_at';
import type { tunnel_id } from './tunnel_id';
import type { tunnel_name } from './tunnel_name';

/**
 * Indicates the cloudflared enabled features for this Cloudflare Tunnel connection.
 */
export type tunnel = {
    account_tag?: common_components_schemas_identifier;
    connections?: connections;
    conns_active_at?: conns_active_at;
    conns_inactive_at?: conns_inactive_at;
    created_at?: cloudflare_tunnel_components_schemas_created_at;
    deleted_at?: schemas_deleted_at;
    id?: tunnel_id;
    name?: tunnel_name;
    remote_config?: remote_config;
    status?: cloudflare_tunnel_components_schemas_status;
};

