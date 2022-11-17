/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { gre } from './gre';
import type { interconnect_components_schemas_description } from './interconnect_components_schemas_description';
import type { interface_address } from './interface_address';
import type { schemas_mtu } from './schemas_mtu';

export type components_schemas_tunnel_update_request = {
    description?: interconnect_components_schemas_description;
    gre?: gre;
    interface_address?: interface_address;
    mtu?: schemas_mtu;
};

