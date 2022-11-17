/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address } from './address';
import type { disabled_at } from './disabled_at';
import type { origin_components_schemas_enabled } from './origin_components_schemas_enabled';
import type { origin_components_schemas_name } from './origin_components_schemas_name';
import type { schemas_header } from './schemas_header';
import type { weight } from './weight';

export type schemas_origin = {
    address?: address;
    disabled_at?: disabled_at;
    enabled?: origin_components_schemas_enabled;
    header?: schemas_header;
    name?: origin_components_schemas_name;
    weight?: weight;
};

