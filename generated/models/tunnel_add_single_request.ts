/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { cloudflare_gre_endpoint } from './cloudflare_gre_endpoint';
import type { components_schemas_ttl } from './components_schemas_ttl';
import type { customer_gre_endpoint } from './customer_gre_endpoint';
import type { gre_tunnel_components_schemas_description } from './gre_tunnel_components_schemas_description';
import type { gre_tunnel_components_schemas_name } from './gre_tunnel_components_schemas_name';
import type { health_check } from './health_check';
import type { interface_address } from './interface_address';
import type { mtu } from './mtu';

export type tunnel_add_single_request = {
    cloudflare_gre_endpoint: cloudflare_gre_endpoint;
    customer_gre_endpoint: customer_gre_endpoint;
    description?: gre_tunnel_components_schemas_description;
    health_check?: health_check;
    interface_address: interface_address;
    mtu?: mtu;
    name: gre_tunnel_components_schemas_name;
    ttl?: components_schemas_ttl;
};

