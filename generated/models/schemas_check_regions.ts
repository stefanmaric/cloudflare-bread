/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A list of regions from which to run health checks. Null means Cloudflare will pick a default region.
 */
export type schemas_check_regions = Array<'WNAM' | 'ENAM' | 'WEU' | 'EEU' | 'NSAM' | 'SSAM' | 'OC' | 'ME' | 'NAF' | 'SAF' | 'IN' | 'SEAS' | 'NEAS' | 'ALL_REGIONS'> | null;
