/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { devices_components_schemas_created } from './devices_components_schemas_created';
import type { devices_components_schemas_ip } from './devices_components_schemas_ip';
import type { devices_components_schemas_name } from './devices_components_schemas_name';
import type { devices_components_schemas_uuid } from './devices_components_schemas_uuid';
import type { devices_components_schemas_version } from './devices_components_schemas_version';
import type { last_seen } from './last_seen';
import type { mac_address } from './mac_address';
import type { manufacturer } from './manufacturer';
import type { model } from './model';
import type { os_distro_name } from './os_distro_name';
import type { os_distro_revision } from './os_distro_revision';
import type { os_version } from './os_version';
import type { platform } from './platform';
import type { revoked_at } from './revoked_at';
import type { schemas_deleted } from './schemas_deleted';
import type { schemas_key } from './schemas_key';
import type { schemas_serial_number } from './schemas_serial_number';
import type { updated } from './updated';
import type { user } from './user';

export type devices = {
    created?: devices_components_schemas_created;
    deleted?: schemas_deleted;
    device_type?: platform;
    id?: devices_components_schemas_uuid;
    ip?: devices_components_schemas_ip;
    key?: schemas_key;
    last_seen?: last_seen;
    mac_address?: mac_address;
    manufacturer?: manufacturer;
    model?: model;
    name?: devices_components_schemas_name;
    os_distro_name?: os_distro_name;
    os_distro_revision?: os_distro_revision;
    os_version?: os_version;
    revoked_at?: revoked_at;
    serial_number?: schemas_serial_number;
    updated?: updated;
    user?: user;
    version?: devices_components_schemas_version;
};

