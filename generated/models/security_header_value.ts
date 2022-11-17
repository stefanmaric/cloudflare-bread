/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type security_header_value = {
    /**
     * Strict Transport Security.
     */
    strict_transport_security?: {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;
        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;
        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;
        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
    };
};

