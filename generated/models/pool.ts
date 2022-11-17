/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { check_regions } from './check_regions';
import type { latitude } from './latitude';
import type { load_shedding } from './load_shedding';
import type { longitude } from './longitude';
import type { minimum_origins } from './minimum_origins';
import type { notification_email } from './notification_email';
import type { notification_filter } from './notification_filter';
import type { origin_steering } from './origin_steering';
import type { origins } from './origins';
import type { pool_components_schemas_description } from './pool_components_schemas_description';
import type { pool_components_schemas_enabled } from './pool_components_schemas_enabled';
import type { pool_components_schemas_identifier } from './pool_components_schemas_identifier';
import type { pool_components_schemas_name } from './pool_components_schemas_name';
import type { schemas_disabled_at } from './schemas_disabled_at';
import type { schemas_monitor } from './schemas_monitor';
import type { timestamp } from './timestamp';

export type pool = {
    check_regions?: check_regions;
    created_on?: timestamp;
    description?: pool_components_schemas_description;
    disabled_at?: schemas_disabled_at;
    enabled?: pool_components_schemas_enabled;
    id?: pool_components_schemas_identifier;
    latitude?: latitude;
    load_shedding?: load_shedding;
    longitude?: longitude;
    minimum_origins?: minimum_origins;
    modified_on?: timestamp;
    monitor?: schemas_monitor;
    name?: pool_components_schemas_name;
    notification_email?: notification_email;
    notification_filter?: notification_filter;
    origin_steering?: origin_steering;
    origins?: origins;
};

