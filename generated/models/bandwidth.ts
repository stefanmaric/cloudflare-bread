/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Breakdown of totals for bandwidth in the form of bytes.
 */
export type bandwidth = {
    /**
     * The total number of bytes served within the time frame.
     */
    all?: number;
    /**
     * The number of bytes that were cached (and served) by Cloudflare.
     */
    cached?: number;
    /**
     * A variable list of key/value pairs where the key represents the type of content served, and the value is the number in bytes served.
     */
    content_type?: Record<string, any>;
    /**
     * A variable list of key/value pairs where the key is a two-digit country code and the value is the number of bytes served to that country.
     */
    country?: Record<string, any>;
    /**
     * A break down of bytes served over HTTPS.
     */
    ssl?: {
        /**
         * The number of bytes served over HTTPS.
         */
        encrypted?: number;
        /**
         * The number of bytes served over HTTP.
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
     * The number of bytes that were fetched and served from the origin server.
     */
    uncached?: number;
};

