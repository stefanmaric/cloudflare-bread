/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { custom_entry } from './custom_entry';
import type { profile_id } from './profile_id';
import type { timestamp } from './timestamp';

export type custom_profile = {
    created_at?: timestamp;
    /**
     * The description of the profile.
     */
    description?: string;
    /**
     * The entries for this profile.
     */
    entries?: Array<custom_entry>;
    id?: profile_id;
    /**
     * The name of the profile.
     */
    name?: string;
    /**
     * The type of the profile.
     */
    type?: 'custom';
    updated_at?: timestamp;
};

