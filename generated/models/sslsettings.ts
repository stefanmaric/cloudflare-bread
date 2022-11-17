/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SSL specific settings.
 */
export type sslsettings = {
    /**
     * An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.
     */
    ciphers?: Array<string>;
    /**
     * Whether or not Early Hints is enabled.
     */
    early_hints?: 'on' | 'off';
    /**
     * Whether or not HTTP2 is enabled.
     */
    http2?: 'on' | 'off';
    /**
     * The minimum TLS version supported.
     */
    min_tls_version?: '1.0' | '1.1' | '1.2' | '1.3';
    /**
     * Whether or not TLS 1.3 is enabled.
     */
    tls_1_3?: 'on' | 'off';
};

