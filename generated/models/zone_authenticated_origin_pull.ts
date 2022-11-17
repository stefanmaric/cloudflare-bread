/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { certificateObject } from './certificateObject';
import type { private_key } from './private_key';
import type { zone_authenticated_origin_pull_components_schemas_certificate } from './zone_authenticated_origin_pull_components_schemas_certificate';
import type { zone_authenticated_origin_pull_components_schemas_enabled } from './zone_authenticated_origin_pull_components_schemas_enabled';
import type { zone_authenticated_origin_pull_components_schemas_identifier } from './zone_authenticated_origin_pull_components_schemas_identifier';

export type zone_authenticated_origin_pull = (certificateObject & {
    certificate?: zone_authenticated_origin_pull_components_schemas_certificate;
    enabled?: zone_authenticated_origin_pull_components_schemas_enabled;
    id?: zone_authenticated_origin_pull_components_schemas_identifier;
    private_key?: private_key;
});

