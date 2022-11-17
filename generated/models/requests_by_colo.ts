/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Breakdown of totals for requests.
 */
export type requests_by_colo = {
    /**
     * Total number of requests served.
     */
    all?: number;
    /**
     * Total number of cached requests served.
     */
    cached?: number;
    /**
     * Key/value pairs where the key is a two-digit country code and the value is the number of requests served to that country.
     */
    country?: Record<string, any>;
    /**
     * A variable list of key/value pairs where the key is a HTTP status code and the value is the number of requests with that code served.
     */
    http_status?: Record<string, any>;
    /**
     * Total number of requests served from the origin.
     */
    uncached?: number;
};

