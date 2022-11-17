/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allow_null_cipher } from './allow_null_cipher';
import type { cloudflare_ipsec_endpoint } from './cloudflare_ipsec_endpoint';
import type { common_components_schemas_created_on } from './common_components_schemas_created_on';
import type { common_components_schemas_identifier_2 } from './common_components_schemas_identifier_2';
import type { common_components_schemas_modified_on } from './common_components_schemas_modified_on';
import type { customer_ipsec_endpoint } from './customer_ipsec_endpoint';
import type { interface_address } from './interface_address';
import type { ipsec_tunnel_components_schemas_description } from './ipsec_tunnel_components_schemas_description';
import type { ipsec_tunnel_components_schemas_name } from './ipsec_tunnel_components_schemas_name';
import type { psk_metadata } from './psk_metadata';
import type { tunnel_health_check } from './tunnel_health_check';

export type ipsec_tunnel = {
    allow_null_cipher?: allow_null_cipher;
    cloudflare_endpoint: cloudflare_ipsec_endpoint;
    created_on?: common_components_schemas_created_on;
    customer_endpoint?: customer_ipsec_endpoint;
    description?: ipsec_tunnel_components_schemas_description;
    id?: common_components_schemas_identifier_2;
    interface_address: interface_address;
    modified_on?: common_components_schemas_modified_on;
    name: ipsec_tunnel_components_schemas_name;
    psk_metadata?: psk_metadata;
    tunnel_health_check?: tunnel_health_check;
};

