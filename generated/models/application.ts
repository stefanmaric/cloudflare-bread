/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { app_type_id } from './app_type_id';
import type { app_types_components_schemas_name } from './app_types_components_schemas_name';
import type { components_schemas_app_id } from './components_schemas_app_id';
import type { timestamp } from './timestamp';

export type application = {
    application_type_id?: app_type_id;
    created_at?: timestamp;
    id?: components_schemas_app_id;
    name?: app_types_components_schemas_name;
};

