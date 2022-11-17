/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ip } from './ip';
import type { ixfr_enable } from './ixfr_enable';
import type { peer_components_schemas_identifier } from './peer_components_schemas_identifier';
import type { peer_components_schemas_name } from './peer_components_schemas_name';
import type { port } from './port';
import type { tsig_id } from './tsig_id';

export type peer = {
    id: peer_components_schemas_identifier;
    ip?: ip;
    ixfr_enable?: ixfr_enable;
    name: peer_components_schemas_name;
    port?: port;
    tsig_id?: tsig_id;
};

