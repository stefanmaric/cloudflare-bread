/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { components_schemas_kind } from './components_schemas_kind';
import type { created_on } from './created_on';
import type { schemas_can_delete } from './schemas_can_delete';

export type address_maps_membership = {
    can_delete?: schemas_can_delete;
    created_at?: created_on;
    identifier?: common_components_schemas_identifier;
    kind?: components_schemas_kind;
};

