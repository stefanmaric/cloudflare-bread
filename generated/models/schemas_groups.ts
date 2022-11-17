/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { exclude } from './exclude';
import type { groups_components_schemas_name } from './groups_components_schemas_name';
import type { include } from './include';
import type { require } from './require';
import type { schemas_uuid } from './schemas_uuid';
import type { timestamp } from './timestamp';

export type schemas_groups = {
    created_at?: timestamp;
    exclude?: exclude;
    id?: schemas_uuid;
    include?: include;
    name?: groups_components_schemas_name;
    require?: require;
    updated_at?: timestamp;
};

