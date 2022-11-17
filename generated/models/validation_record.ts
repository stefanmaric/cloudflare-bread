/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Certificate's required validation record.
 */
export type validation_record = {
    /**
     * The set of email addresses that the certificate authority (CA) will use to complete domain validation.
     */
    emails?: Array<any>;
    /**
     * The content that the certificate authority (CA) will expect to find at the http_url during the domain validation.
     */
    http_body?: string;
    /**
     * The url that will be checked during domain validation.
     */
    http_url?: string;
    /**
     * The hostname that the certificate authority (CA) will check for a TXT record during domain validation .
     */
    txt_name?: string;
    /**
     * The TXT record that the certificate authority (CA) will check during domain validation.
     */
    txt_value?: string;
};

