/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Ratelimit in queries per second per datacenter (applies to DNS queries sent to the origin nameservers configured on the cluster).
 * Notes: A ratelimit of 0 turns off the ratelimit. Otherwise the minimum is 100.
 */
export type schemas_ratelimit = number;
