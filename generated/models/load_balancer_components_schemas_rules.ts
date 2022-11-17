/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adaptive_routing } from './adaptive_routing';
import type { country_pools } from './country_pools';
import type { default_pools } from './default_pools';
import type { fallback_pool } from './fallback_pool';
import type { location_strategy } from './location_strategy';
import type { pop_pools } from './pop_pools';
import type { random_steering } from './random_steering';
import type { region_pools } from './region_pools';
import type { schemas_ttl } from './schemas_ttl';
import type { session_affinity } from './session_affinity';
import type { session_affinity_attributes } from './session_affinity_attributes';
import type { session_affinity_ttl } from './session_affinity_ttl';
import type { steering_policy } from './steering_policy';

/**
 * BETA Field Not General Access: A list of rules for this load balancer to execute.
 */
export type load_balancer_components_schemas_rules = Array<{
    /**
     * The condition expressions to evaluate. If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
     */
    condition?: string;
    /**
     * Disable this specific rule. It will no longer be evaluated by this load balancer.
     */
    disabled?: boolean;
    /**
     * A collection of fields used to directly respond to the eyeball instead of routing to a pool. If a fixed_response is supplied the rule will be marked as terminates.
     */
    fixed_response?: {
        /**
         * The http 'Content-Type' header to include in the response.
         */
        content_type?: string;
        /**
         * The http 'Location' header to include in the response.
         */
        location?: string;
        /**
         * Text to include as the http body.
         */
        message_body?: string;
        /**
         * The http status code to respond with.
         */
        status_code?: number;
    };
    /**
     * Name of this rule. Only used for human readability.
     */
    name?: string;
    /**
     * A collection of overrides to apply to the load balancer when this rule's condition is true. All fields are optional.
     */
    overrides?: {
        adaptive_routing?: adaptive_routing;
        country_pools?: country_pools;
        default_pools?: default_pools;
        fallback_pool?: fallback_pool;
        location_strategy?: location_strategy;
        pop_pools?: pop_pools;
        random_steering?: random_steering;
        region_pools?: region_pools;
        session_affinity?: session_affinity;
        session_affinity_attributes?: session_affinity_attributes;
        session_affinity_ttl?: session_affinity_ttl;
        steering_policy?: steering_policy;
        ttl?: schemas_ttl;
    };
    /**
     * The order in which rules should be executed in relation to each other. Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.
     */
    priority?: number;
    /**
     * If this rule's condition is true, this causes rule evaluation to stop after processing this rule.
     */
    terminates?: boolean;
}>;
