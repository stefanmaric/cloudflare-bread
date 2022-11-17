/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ips = {
    /**
     * A digest of the IP data. Useful for determining if the data has changed.
     */
    etag?: string;
    /**
     * List of Cloudflare IPv4 CIDR addresses.
     */
    ipv4_cidrs?: Array<string>;
    /**
     * List of Cloudflare IPv6 CIDR addresses.
     */
    ipv6_cidrs?: Array<string>;
};

