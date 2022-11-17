/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { new_custom_entry } from './new_custom_entry';

export type new_custom_profile = {
    /**
     * The description of the profile.
     */
    description?: string;
    /**
     * The entries for this profile.
     */
    entries?: Array<new_custom_entry>;
    /**
     * The name of the profile.
     */
    name?: string;
};

