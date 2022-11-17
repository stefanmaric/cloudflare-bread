/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { comment } from './comment';

export type teamnet = {
    comment: comment;
    /**
     * Timestamps when the route was created, formatted in RFC 3339.
     */
    created_at: any;
    /**
     * If present, indicates route was deleted at the given date (formatted in RFC 3339). If absent, route has not been deleted.
     */
    readonly deleted_at?: string | null;
    /**
     * CIDR notation of the IPv4 or IPv6 range of the network the route connects to.
     */
    network: any;
    /**
     * UUID of the Tunnel the route belongs to.
     */
    tunnel_id: any;
    /**
     * User-friendly name of the Tunnel the route belongs to.
     */
    tunnel_name?: any;
    /**
     * UUID of the virtual network this route belongs to.
     */
    virtual_network_id?: any;
};

