/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { days_until_next_rotation } from './days_until_next_rotation';
import type { key_rotation_interval_days } from './key_rotation_interval_days';
import type { last_key_rotation_at } from './last_key_rotation_at';

export type key_config = {
    days_until_next_rotation?: days_until_next_rotation;
    key_rotation_interval_days?: key_rotation_interval_days;
    last_key_rotation_at?: last_key_rotation_at;
};

