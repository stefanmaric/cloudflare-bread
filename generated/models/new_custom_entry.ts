/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_pattern } from './components_schemas_pattern';

/**
 * A custom entry create payload
 */
export type new_custom_entry = {
    /**
     * Whether the entry is enabled or not.
     */
    enabled: boolean;
    /**
     * The name of the entry.
     */
    name: string;
    pattern: components_schemas_pattern;
};

