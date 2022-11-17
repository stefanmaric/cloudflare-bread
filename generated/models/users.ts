/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { active_device_count } from './active_device_count';
import type { components_schemas_email } from './components_schemas_email';
import type { last_successful_login } from './last_successful_login';
import type { schemas_access_seat } from './schemas_access_seat';
import type { schemas_gateway_seat } from './schemas_gateway_seat';
import type { seat_uid } from './seat_uid';
import type { timestamp } from './timestamp';
import type { uid } from './uid';
import type { users_components_schemas_id } from './users_components_schemas_id';
import type { users_components_schemas_name } from './users_components_schemas_name';

export type users = {
    access_seat?: schemas_access_seat;
    active_device_count?: active_device_count;
    created_at?: timestamp;
    email?: components_schemas_email;
    gateway_seat?: schemas_gateway_seat;
    id?: users_components_schemas_id;
    last_successful_login?: last_successful_login;
    name?: users_components_schemas_name;
    seat_uid?: seat_uid;
    uid?: uid;
    updated_at?: timestamp;
};

