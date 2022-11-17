/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { activation } from './activation';
import type { railgun_components_schemas_created_on } from './railgun_components_schemas_created_on';
import type { railgun_components_schemas_enabled } from './railgun_components_schemas_enabled';
import type { railgun_components_schemas_identifier } from './railgun_components_schemas_identifier';
import type { railgun_components_schemas_modified_on } from './railgun_components_schemas_modified_on';
import type { railgun_components_schemas_name } from './railgun_components_schemas_name';
import type { railgun_components_schemas_status } from './railgun_components_schemas_status';
import type { upgrade_info } from './upgrade_info';
import type { zones_connected } from './zones_connected';

export type schemas_railgun = {
    activation: activation;
    created_on?: railgun_components_schemas_created_on;
    enabled: railgun_components_schemas_enabled;
    id: railgun_components_schemas_identifier;
    modified_on?: railgun_components_schemas_modified_on;
    name: railgun_components_schemas_name;
    status: railgun_components_schemas_status;
    upgrade_info?: upgrade_info;
    zones_connected: zones_connected;
};

