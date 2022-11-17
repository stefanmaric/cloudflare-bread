/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { algo } from './algo';
import type { secret } from './secret';
import type { tsig_components_schemas_identifier } from './tsig_components_schemas_identifier';
import type { tsig_components_schemas_name } from './tsig_components_schemas_name';

export type tsig = {
    algo: algo;
    id: tsig_components_schemas_identifier;
    name: tsig_components_schemas_name;
    secret: secret;
};

