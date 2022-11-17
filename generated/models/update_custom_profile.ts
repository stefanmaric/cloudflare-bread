/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { custom_entry } from './custom_entry';

export type update_custom_profile = {
    /**
     * The description of the profile.
     */
    description?: string;
    /**
     * The entries for this profile. Array elements with IDs are modifying the existing entry with that ID. Elements without ID will create new entries. Any entry not in the list will be deleted.
     */
    entries?: Array<custom_entry>;
    /**
     * The name of the profile.
     */
    name?: string;
};

