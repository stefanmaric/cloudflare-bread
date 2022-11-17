/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { entry_id } from './entry_id';

/**
 * A predefined entry that matches a profile
 */
export type predefined_entry = {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
    id?: entry_id;
    /**
     * The name of the entry.
     */
    name?: string;
    /**
     * ID of the parent profile
     */
    profile_id?: any;
};

