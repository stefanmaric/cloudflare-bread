/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.
 */
export type pop_pools = Record<string, any>;
