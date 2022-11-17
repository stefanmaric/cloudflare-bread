/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_pattern } from './components_schemas_pattern';
import type { entry_id } from './entry_id';
import type { timestamp } from './timestamp';

/**
 * A custom entry that matches a profile
 */
export type custom_entry = {
    created_at?: timestamp;
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
    id?: entry_id;
    /**
     * The name of the entry.
     */
    name?: string;
    pattern?: components_schemas_pattern;
    /**
     * ID of the parent profile
     */
    profile_id?: any;
    updated_at?: timestamp;
};

