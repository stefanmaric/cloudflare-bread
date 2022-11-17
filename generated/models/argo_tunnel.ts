/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { argo_tunnel_components_schemas_connection } from './argo_tunnel_components_schemas_connection';
import type { tunnel_id } from './tunnel_id';
import type { tunnel_name } from './tunnel_name';

export type argo_tunnel = {
    /**
     * Connections between cloudflared and the Cloudflare edge that are serving this tunnel.
     */
    connections: Array<argo_tunnel_components_schemas_connection>;
    /**
     * Timestamps when the tunnel was created, formatted in RFC 3339.
     */
    created_at: any;
    /**
     * If present, indicates tunnel was deleted at the given date (formatted in RFC 3339). If absent, tunnel has not been deleted.
     */
    deleted_at?: string | null;
    id: tunnel_id;
    name: tunnel_name;
};

