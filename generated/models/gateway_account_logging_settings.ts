/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type gateway_account_logging_settings = {
    /**
     * Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).
     */
    redact_pii?: boolean;
    /**
     * Logging settings by rule type.
     */
    settings_by_rule_type?: {
        /**
         * Logging settings for DNS firewall.
         */
        dns?: Record<string, any>;
        /**
         * Logging settings for HTTP/HTTPS firewall.
         */
        http?: Record<string, any>;
        /**
         * Logging settings for Network firewall.
         */
        l4?: Record<string, any>;
    };
};

