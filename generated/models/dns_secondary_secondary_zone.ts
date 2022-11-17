/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { auto_refresh_seconds } from './auto_refresh_seconds';
import type { dns_secondary_secondary_zone_components_schemas_identifier } from './dns_secondary_secondary_zone_components_schemas_identifier';
import type { dns_secondary_secondary_zone_components_schemas_name } from './dns_secondary_secondary_zone_components_schemas_name';
import type { peers } from './peers';

export type dns_secondary_secondary_zone = {
    auto_refresh_seconds: auto_refresh_seconds;
    id: dns_secondary_secondary_zone_components_schemas_identifier;
    name: dns_secondary_secondary_zone_components_schemas_name;
    peers: peers;
};

