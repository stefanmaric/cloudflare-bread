/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Additional settings that modify the rule's action.
 */
export type rule_settings = {
    /**
     * Add custom headers to allowed requests, in the form of key-value pairs. Keys are header names, pointing to an array with its header value(s).
     */
    add_headers?: Record<string, any>;
    /**
     * Configure how browser isolation behaves.
     */
    biso_admin_controls?: {
        /**
         * Disable copy-paste.
         */
        dcp?: boolean;
        /**
         * Disable download.
         */
        dd?: boolean;
        /**
         * Disable keyboard usage.
         */
        dk?: boolean;
        /**
         * Disable printing.
         */
        dp?: boolean;
        /**
         * Disable upload.
         */
        du?: boolean;
    };
    /**
     * Enable the custom block page.
     */
    block_page_enabled?: boolean;
    /**
     * The text describing why this block occurred that will be displayed on the custom block page (if enabled).
     */
    block_reason?: string;
    /**
     * Configure how session check behaves.
     */
    check_session?: {
        /**
         * Configure how fresh the session needs to be to be considered valid.
         */
        duration?: string;
        /**
         * Enable session enforcement for this fule.
         */
        enforce?: boolean;
    };
    /**
     * INSECURE - disable DNSSEC validation (for allow actions).
     */
    insecure_disable_dnssec_validation?: boolean;
    /**
     * Include IPs in DNS resolver category blocks. By default categories only block on domain names.
     */
    ip_categories?: boolean;
    /**
     * Send matching traffic to the supplied destination IP address and port.
     */
    l4override?: {
        /**
         * IPv4 or IPv6 address.
         */
        ip?: string;
        /**
         * A port number to use for TCP/UDP overrides.
         */
        port?: number;
    };
    /**
     * Override matching DNS queries with this.
     */
    override_host?: string;
    /**
     * Override matching DNS queries with this.
     */
    override_ips?: Array<string>;
};

