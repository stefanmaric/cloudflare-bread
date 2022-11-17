/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { sslsettings } from './sslsettings';

/**
 * SSL properties used when creating the custom hostname.
 */
export type sslpost = {
    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';
    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;
    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;
    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';
    settings?: sslsettings;
    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be used.
     */
    readonly type?: 'dv';
    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
};

