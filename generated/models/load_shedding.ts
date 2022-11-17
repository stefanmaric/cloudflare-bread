/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Configures load shedding policies and percentages for the pool.
 */
export type load_shedding = {
    /**
     * The percent of traffic to shed from the pool, according to the default policy. Applies to new sessions and traffic without session affinity.
     */
    default_percent?: number;
    /**
     * The default policy to use when load shedding. A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.
     */
    default_policy?: 'random' | 'hash';
    /**
     * The percent of existing sessions to shed from the pool, according to the session policy.
     */
    session_percent?: number;
    /**
     * Only the hash policy is supported for existing sessions (to avoid exponential decay).
     */
    session_policy?: 'hash';
};

