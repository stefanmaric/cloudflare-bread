/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { app_type_id } from './app_type_id';
import type { app_types_components_schemas_name } from './app_types_components_schemas_name';
import type { timestamp } from './timestamp';

export type application_type = {
    created_at?: timestamp;
    /**
     * A short summary of applications with this type.
     */
    description?: string;
    id?: app_type_id;
    name?: app_types_components_schemas_name;
};

