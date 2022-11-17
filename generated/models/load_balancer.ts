/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adaptive_routing } from './adaptive_routing';
import type { country_pools } from './country_pools';
import type { default_pools } from './default_pools';
import type { fallback_pool } from './fallback_pool';
import type { load_balancer_components_schemas_description } from './load_balancer_components_schemas_description';
import type { load_balancer_components_schemas_enabled } from './load_balancer_components_schemas_enabled';
import type { load_balancer_components_schemas_identifier } from './load_balancer_components_schemas_identifier';
import type { load_balancer_components_schemas_name } from './load_balancer_components_schemas_name';
import type { load_balancer_components_schemas_rules } from './load_balancer_components_schemas_rules';
import type { location_strategy } from './location_strategy';
import type { pop_pools } from './pop_pools';
import type { random_steering } from './random_steering';
import type { region_pools } from './region_pools';
import type { schemas_proxied } from './schemas_proxied';
import type { schemas_ttl } from './schemas_ttl';
import type { session_affinity } from './session_affinity';
import type { session_affinity_attributes } from './session_affinity_attributes';
import type { session_affinity_ttl } from './session_affinity_ttl';
import type { steering_policy } from './steering_policy';
import type { timestamp } from './timestamp';

export type load_balancer = {
    adaptive_routing?: adaptive_routing;
    country_pools?: country_pools;
    created_on?: timestamp;
    default_pools?: default_pools;
    description?: load_balancer_components_schemas_description;
    enabled?: load_balancer_components_schemas_enabled;
    fallback_pool?: fallback_pool;
    id?: load_balancer_components_schemas_identifier;
    location_strategy?: location_strategy;
    modified_on?: timestamp;
    name?: load_balancer_components_schemas_name;
    pop_pools?: pop_pools;
    proxied?: schemas_proxied;
    random_steering?: random_steering;
    region_pools?: region_pools;
    rules?: load_balancer_components_schemas_rules;
    session_affinity?: session_affinity;
    session_affinity_attributes?: session_affinity_attributes;
    session_affinity_ttl?: session_affinity_ttl;
    steering_policy?: steering_policy;
    ttl?: schemas_ttl;
};

