/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { arch } from './arch';
import type { cloudflare_tunnel_components_schemas_version } from './cloudflare_tunnel_components_schemas_version';
import type { connection_id } from './connection_id';
import type { connections } from './connections';
import type { run_at } from './run_at';
import type { schemas_features } from './schemas_features';

/**
 * Indicates the cloudflared enabled features for this Cloudflare Tunnel connection.
 */
export type tunnel_connection = {
    arch?: arch;
    conns?: connections;
    features?: schemas_features;
    id?: connection_id;
    run_at?: run_at;
    version?: cloudflare_tunnel_components_schemas_version;
};

