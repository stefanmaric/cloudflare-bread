/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { hostname_authenticated_origin_pull_components_schemas_certificate } from './hostname_authenticated_origin_pull_components_schemas_certificate';
import type { hostname_authenticated_origin_pull_components_schemas_enabled } from './hostname_authenticated_origin_pull_components_schemas_enabled';
import type { hostname_authenticated_origin_pull_components_schemas_identifier } from './hostname_authenticated_origin_pull_components_schemas_identifier';
import type { hostname_certid_object } from './hostname_certid_object';
import type { schemas_hostname } from './schemas_hostname';
import type { schemas_private_key } from './schemas_private_key';

export type hostname_authenticated_origin_pull = (hostname_certid_object & {
    cert_id?: hostname_authenticated_origin_pull_components_schemas_identifier;
    certificate?: hostname_authenticated_origin_pull_components_schemas_certificate;
    enabled?: hostname_authenticated_origin_pull_components_schemas_enabled;
    hostname?: schemas_hostname;
    id?: hostname_authenticated_origin_pull_components_schemas_identifier;
    private_key?: schemas_private_key;
});

