/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The configuration specific to GRE interconnects.
 */
export type gre = {
    /**
     * The IP address assigned to the Cloudflare side of the GRE tunnel created as part of the Interconnect.
     */
    cloudflare_endpoint?: string;
    /**
     * The IP address assigned to the customer side of the GRE tunnel created as part of the Interconnect.
     */
    customer_endpoint?: string;
};

