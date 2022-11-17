/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Breakdown of totals for threats.
 */
export type threats = {
    /**
     * The total number of identifiable threats received over the time frame.
     */
    all?: number;
    /**
     * A list of key/value pairs where the key is a two-digit country code and the value is the number of malicious requests received from that country.
     */
    country?: Record<string, any>;
    /**
     * The list of key/value pairs where the key is a threat category and the value is the number of requests.
     */
    type?: Record<string, any>;
};

