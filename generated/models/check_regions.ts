/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A list of regions from which to run health checks. Null means every Cloudflare data center.
 */
export type check_regions = Array<'WNAM' | 'ENAM' | 'WEU' | 'EEU' | 'NSAM' | 'SSAM' | 'OC' | 'ME' | 'NAF' | 'SAF' | 'SAS' | 'SEAS' | 'NEAS' | 'ALL_REGIONS'> | null;
