/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nexthop } from './nexthop';
import type { prefix } from './prefix';
import type { route_components_schemas_created_on } from './route_components_schemas_created_on';
import type { route_components_schemas_description } from './route_components_schemas_description';
import type { route_components_schemas_identifier } from './route_components_schemas_identifier';
import type { route_components_schemas_modified_on } from './route_components_schemas_modified_on';
import type { route_components_schemas_priority } from './route_components_schemas_priority';
import type { schemas_scope } from './schemas_scope';
import type { schemas_weight } from './schemas_weight';

export type schemas_route = {
    created_on?: route_components_schemas_created_on;
    description?: route_components_schemas_description;
    id?: route_components_schemas_identifier;
    modified_on?: route_components_schemas_modified_on;
    nexthop: nexthop;
    prefix: prefix;
    priority: route_components_schemas_priority;
    scope?: schemas_scope;
    weight?: schemas_weight;
};

