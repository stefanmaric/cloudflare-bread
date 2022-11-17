/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Parameters specific to an HTTP or HTTPS health check.
 */
export type http_config = {
    /**
     * Do not validate the certificate when the health check uses HTTPS.
     */
    allow_insecure?: boolean;
    /**
     * A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy.
     */
    expected_body?: string;
    /**
     * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.
     */
    expected_codes?: Array<string> | null;
    /**
     * Follow redirects if the origin returns a 3xx status code.
     */
    follow_redirects?: boolean;
    /**
     * The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden.
     */
    header?: Record<string, any> | null;
    /**
     * The HTTP method to use for the health check.
     */
    method?: 'GET' | 'HEAD';
    /**
     * The endpoint path to health check against.
     */
    path?: string;
    /**
     * Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS.
     */
    port?: number;
};

