/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { custom_hostname_components_schemas_identifier } from './custom_hostname_components_schemas_identifier';
import type { customhostname } from './customhostname';
import type { hostname } from './hostname';
import type { schemas_ssl } from './schemas_ssl';

export type custom_hostname = (customhostname & {
    hostname: hostname;
    id: custom_hostname_components_schemas_identifier;
    ssl: schemas_ssl;
});

