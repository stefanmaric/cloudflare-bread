/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_created_on } from './common_components_schemas_created_on';
import type { common_components_schemas_identifier_2 } from './common_components_schemas_identifier_2';
import type { common_components_schemas_modified_on } from './common_components_schemas_modified_on';
import type { gre } from './gre';
import type { interconnect_components_schemas_description } from './interconnect_components_schemas_description';
import type { interconnect_components_schemas_name } from './interconnect_components_schemas_name';
import type { interface_address } from './interface_address';
import type { schemas_health_check } from './schemas_health_check';
import type { schemas_mtu } from './schemas_mtu';

export type interconnect = {
    colo_name?: interconnect_components_schemas_name;
    created_on?: common_components_schemas_created_on;
    description?: interconnect_components_schemas_description;
    gre?: gre;
    health_check?: schemas_health_check;
    id?: common_components_schemas_identifier_2;
    interface_address?: interface_address;
    modified_on?: common_components_schemas_modified_on;
    mtu?: schemas_mtu;
    name?: interconnect_components_schemas_name;
};

