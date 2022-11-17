/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { properties_name } from './properties_name';

/**
 * A simple zone object. May have null properties if not a zone subscription.
 */
export type zone = {
    id?: common_components_schemas_identifier;
    name?: properties_name;
};

