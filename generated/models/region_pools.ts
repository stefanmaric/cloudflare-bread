/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. Any regions not explicitly defined will fall back to using default_pools.
 */
export type region_pools = Record<string, any>;
