/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.
 */
export type interval = number;
