/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_hostname } from './components_schemas_hostname';
import type { domain_identifier } from './domain_identifier';
import type { environment } from './environment';
import type { service } from './service';
import type { zone_identifier } from './zone_identifier';
import type { zone_name } from './zone_name';

export type domain = {
    environment?: environment;
    hostname?: components_schemas_hostname;
    id?: domain_identifier;
    service?: service;
    zone_id?: zone_identifier;
    zone_name?: zone_name;
};

