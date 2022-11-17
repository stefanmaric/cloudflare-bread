/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Breakdown of totals for requests.
 */
export type schemas_requests = {
    /**
     * Total number of requests served.
     */
    all?: number;
    /**
     * Total number of cached requests served.
     */
    cached?: number;
    /**
     * A variable list of key/value pairs where the key represents the type of content served, and the value is the number of requests.
     */
    content_type?: Record<string, any>;
    /**
     * A variable list of key/value pairs where the key is a two-digit country code and the value is the number of requests served to that country.
     */
    country?: Record<string, any>;
    /**
     * Key/value pairs where the key is a HTTP status code and the value is the number of requests served with that code.
     */
    http_status?: Record<string, any>;
    /**
     * A break down of requests served over HTTPS.
     */
    ssl?: {
        /**
         * The number of requests served over HTTPS.
         */
        encrypted?: number;
        /**
         * The number of requests served over HTTP.
         */
        unencrypted?: number;
    };
    /**
     * A breakdown of requests by their SSL protocol.
     */
    ssl_protocols?: {
        /**
         * The number of requests served over TLS v1.0.
         */
        TLSv1?: number;
        /**
         * The number of requests served over TLS v1.1.
         */
        'TLSv1.1'?: number;
        /**
         * The number of requests served over TLS v1.2.
         */
        'TLSv1.2'?: number;
        /**
         * The number of requests served over TLS v1.3.
         */
        'TLSv1.3'?: number;
        /**
         * The number of requests served over HTTP.
         */
        none?: number;
    };
    /**
     * Total number of requests served from the origin.
     */
    uncached?: number;
};

