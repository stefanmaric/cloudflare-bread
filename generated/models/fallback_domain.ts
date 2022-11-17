/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type fallback_domain = {
    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;
    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<any>;
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;
};

