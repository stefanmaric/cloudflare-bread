/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { activated_on } from './activated_on';
import type { activation_key } from './activation_key';
import type { build } from './build';
import type { railgun_components_schemas_created_on } from './railgun_components_schemas_created_on';
import type { railgun_components_schemas_enabled } from './railgun_components_schemas_enabled';
import type { railgun_components_schemas_identifier } from './railgun_components_schemas_identifier';
import type { railgun_components_schemas_modified_on } from './railgun_components_schemas_modified_on';
import type { railgun_components_schemas_name } from './railgun_components_schemas_name';
import type { railgun_components_schemas_status } from './railgun_components_schemas_status';
import type { railgun_components_schemas_version } from './railgun_components_schemas_version';
import type { revision } from './revision';
import type { upgrade_info } from './upgrade_info';
import type { zones_connected } from './zones_connected';

export type railgun = {
    activated_on: activated_on;
    activation_key: activation_key;
    build: build;
    created_on: railgun_components_schemas_created_on;
    enabled: railgun_components_schemas_enabled;
    id: railgun_components_schemas_identifier;
    modified_on: railgun_components_schemas_modified_on;
    name: railgun_components_schemas_name;
    revision: revision;
    status: railgun_components_schemas_status;
    upgrade_info?: upgrade_info;
    version: railgun_components_schemas_version;
    zones_connected: zones_connected;
};

