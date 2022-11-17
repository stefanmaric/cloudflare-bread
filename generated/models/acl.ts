/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { acl_components_schemas_identifier } from './acl_components_schemas_identifier';
import type { acl_components_schemas_name } from './acl_components_schemas_name';
import type { ip_range } from './ip_range';

export type acl = {
    id: acl_components_schemas_identifier;
    ip_range: ip_range;
    name: acl_components_schemas_name;
};

