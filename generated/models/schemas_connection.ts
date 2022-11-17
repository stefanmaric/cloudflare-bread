/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { connection_components_schemas_created_on } from './connection_components_schemas_created_on';
import type { connection_components_schemas_enabled } from './connection_components_schemas_enabled';
import type { connection_components_schemas_identifier } from './connection_components_schemas_identifier';
import type { connection_components_schemas_modified_on } from './connection_components_schemas_modified_on';
import type { connection_components_schemas_zone } from './connection_components_schemas_zone';

export type schemas_connection = {
    created_on?: connection_components_schemas_created_on;
    enabled: connection_components_schemas_enabled;
    id: connection_components_schemas_identifier;
    modified_on?: connection_components_schemas_modified_on;
    zone: connection_components_schemas_zone;
};

