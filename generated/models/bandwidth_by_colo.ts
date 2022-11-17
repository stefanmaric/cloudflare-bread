/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Breakdown of totals for bandwidth in the form of bytes.
 */
export type bandwidth_by_colo = {
    /**
     * The total number of bytes served within the time frame.
     */
    all?: number;
    /**
     * The number of bytes that were cached (and served) by Cloudflare.
     */
    cached?: number;
    /**
     * The number of bytes that were fetched and served from the origin server.
     */
    uncached?: number;
};

