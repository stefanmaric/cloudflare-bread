/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { predefined_entry } from './predefined_entry';
import type { profile_id } from './profile_id';

export type predefined_profile = {
    /**
     * The entries for this profile.
     */
    entries?: Array<predefined_entry>;
    id?: profile_id;
    /**
     * The name of the profile.
     */
    name?: string;
    /**
     * The type of the profile.
     */
    type?: 'predefined';
};

