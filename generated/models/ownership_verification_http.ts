/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This presents the token to be served by the given http url to activate a hostname.
 */
export type ownership_verification_http = {
    /**
     * Token to be served.
     */
    http_body?: string;
    /**
     * The HTTP URL that will be checked during custom hostname verification and where the customer should host the token.
     */
    http_url?: string;
};

