/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configures pool weights for random steering. When steering_policy is 'random', a random pool is selected with probability proportional to these pool weights.
 */
export type random_steering = {
    /**
     * The default weight for pools in the load balancer that are not specified in the pool_weights map.
     */
    default_weight?: number;
    /**
     * A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.
     */
    pool_weights?: Record<string, any>;
};

