/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { filters_components_schemas_enabled } from './filters_components_schemas_enabled';
import type { schemas_pattern } from './schemas_pattern';

export type filters = {
    enabled: filters_components_schemas_enabled;
    id: common_components_schemas_identifier;
    pattern: schemas_pattern;
};

