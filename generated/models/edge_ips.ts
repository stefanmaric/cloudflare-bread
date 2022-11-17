/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The anycast edge IP configuration for the hostname of this application.
 */
export type edge_ips = ({
    /**
     * The IP versions supported for inbound connections on Spectrum anycast IPs.
     */
    connectivity?: 'all' | 'ipv4' | 'ipv6';
    /**
     * The type of edge IP configuration specified. Dynamically allocated edge IPs use Spectrum anycast IPs in accordance with the connectivity you specify. Only valid with CNAME DNS names.
     */
    type?: 'dynamic';
} | {
    /**
     * The array of customer owned IPs we broadcast via anycast for this hostname and application.
     */
    ips?: Array<string>;
    /**
     * The type of edge IP configuration specified. Statically allocated edge IPs use customer IPs in accordance with the ips array you specify. Only valid with ADDRESS DNS names.
     */
    type?: 'static';
});

