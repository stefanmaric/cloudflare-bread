/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { nexthop } from './nexthop';
import type { prefix } from './prefix';
import type { route_components_schemas_description } from './route_components_schemas_description';
import type { route_components_schemas_priority } from './route_components_schemas_priority';
import type { schemas_scope } from './schemas_scope';
import type { schemas_weight } from './schemas_weight';

export type route_add_single_request = {
    description?: route_components_schemas_description;
    nexthop: nexthop;
    prefix: prefix;
    priority: route_components_schemas_priority;
    scope?: schemas_scope;
    weight?: schemas_weight;
};

