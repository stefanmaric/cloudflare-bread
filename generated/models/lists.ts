/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { count } from './count';
import type { lists_components_schemas_description_2 } from './lists_components_schemas_description_2';
import type { lists_components_schemas_name_2 } from './lists_components_schemas_name_2';
import type { lists_components_schemas_type } from './lists_components_schemas_type';
import type { lists_components_schemas_uuid } from './lists_components_schemas_uuid';
import type { timestamp } from './timestamp';

export type lists = {
    count?: count;
    created_at?: timestamp;
    description?: lists_components_schemas_description_2;
    id?: lists_components_schemas_uuid;
    name?: lists_components_schemas_name_2;
    type?: lists_components_schemas_type;
    updated_at?: timestamp;
};

