/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { cloudflare_gre_endpoint } from './cloudflare_gre_endpoint';
import type { common_components_schemas_created_on } from './common_components_schemas_created_on';
import type { common_components_schemas_identifier_2 } from './common_components_schemas_identifier_2';
import type { common_components_schemas_modified_on } from './common_components_schemas_modified_on';
import type { components_schemas_ttl } from './components_schemas_ttl';
import type { customer_gre_endpoint } from './customer_gre_endpoint';
import type { gre_tunnel_components_schemas_description } from './gre_tunnel_components_schemas_description';
import type { gre_tunnel_components_schemas_name } from './gre_tunnel_components_schemas_name';
import type { health_check } from './health_check';
import type { interface_address } from './interface_address';
import type { mtu } from './mtu';

export type gre_tunnel = {
    cloudflare_gre_endpoint: cloudflare_gre_endpoint;
    created_on?: common_components_schemas_created_on;
    customer_gre_endpoint: customer_gre_endpoint;
    description?: gre_tunnel_components_schemas_description;
    health_check?: health_check;
    id?: common_components_schemas_identifier_2;
    interface_address: interface_address;
    modified_on?: common_components_schemas_modified_on;
    mtu?: mtu;
    name: gre_tunnel_components_schemas_name;
    ttl?: components_schemas_ttl;
};

