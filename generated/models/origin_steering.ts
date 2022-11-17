/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.
 */
export type origin_steering = {
    /**
     * The type of origin steering policy to use, either "random" or "hash" (based on CF-Connecting-IP).
     */
    policy?: 'random' | 'hash';
};

