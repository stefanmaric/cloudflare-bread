/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { expression } from './expression';
import type { filters_components_schemas_description } from './filters_components_schemas_description';
import type { filters_components_schemas_id } from './filters_components_schemas_id';
import type { filters_components_schemas_paused } from './filters_components_schemas_paused';
import type { schemas_ref } from './schemas_ref';

export type filter = {
    description?: filters_components_schemas_description;
    expression?: expression;
    id?: filters_components_schemas_id;
    paused?: filters_components_schemas_paused;
    ref?: schemas_ref;
};

