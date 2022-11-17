/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address_maps_components_schemas_description } from './address_maps_components_schemas_description';
import type { can_delete } from './can_delete';
import type { can_modify_ips } from './can_modify_ips';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { default_sni } from './default_sni';
import type { timestamp } from './timestamp';

export type address_maps = {
    can_delete?: can_delete;
    can_modify_ips?: can_modify_ips;
    created_at?: timestamp;
    default_sni?: default_sni;
    description?: address_maps_components_schemas_description;
    id?: common_components_schemas_identifier;
    modified_at?: timestamp;
};

