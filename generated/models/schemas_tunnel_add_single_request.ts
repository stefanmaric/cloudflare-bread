/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { cloudflare_ipsec_endpoint } from './cloudflare_ipsec_endpoint';
import type { customer_ipsec_endpoint } from './customer_ipsec_endpoint';
import type { interface_address } from './interface_address';
import type { ipsec_tunnel_components_schemas_description } from './ipsec_tunnel_components_schemas_description';
import type { ipsec_tunnel_components_schemas_name } from './ipsec_tunnel_components_schemas_name';
import type { psk } from './psk';

export type schemas_tunnel_add_single_request = {
    cloudflare_endpoint: cloudflare_ipsec_endpoint;
    customer_endpoint?: customer_ipsec_endpoint;
    description?: ipsec_tunnel_components_schemas_description;
    interface_address: interface_address;
    name: ipsec_tunnel_components_schemas_name;
    psk?: psk;
};

