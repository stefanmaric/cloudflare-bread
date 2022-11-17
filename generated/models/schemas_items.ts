/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { lists_components_schemas_value } from './lists_components_schemas_value';
import type { timestamp } from './timestamp';

/**
 * The items in the List.
 */
export type schemas_items = Array<{
    created_at?: timestamp;
    value?: lists_components_schemas_value;
}>;
