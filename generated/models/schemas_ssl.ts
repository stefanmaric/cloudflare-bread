/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { sslsettings } from './sslsettings';
import type { validation_record } from './validation_record';

/**
 * SSL properties for the custom hostname.
 */
export type schemas_ssl = {
    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';
    /**
     * The Certificate Authority that has issued this certificate.
     */
    certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';
    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;
    /**
     * The identifier for the Custom CSR that was used.
     */
    custom_csr_id?: string;
    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;
    /**
     * The time the custom certificate expires on.
     */
    expires_on?: string;
    /**
     * A list of Hostnames on a custom uploaded certificate.
     */
    hosts?: Array<any>;
    /**
     * Custom hostname SSL identifier tag.
     */
    id?: string;
    /**
     * The issuer on a custom uploaded certificate.
     */
    issuer?: string;
    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';
    /**
     * The serial number on a custom uploaded certificate.
     */
    serial_number?: string;
    settings?: sslsettings;
    /**
     * The signature on a custom uploaded certificate.
     */
    signature?: string;
    /**
     * Status of the hostname's SSL certificates.
     */
    readonly status?: 'initializing' | 'pending_validation' | 'deleted' | 'pending_issuance' | 'pending_deployment' | 'pending_deletion' | 'pending_expiration' | 'expired' | 'active' | 'initializing_timed_out' | 'validation_timed_out' | 'issuance_timed_out' | 'deployment_timed_out' | 'deletion_timed_out' | 'pending_cleanup' | 'staging_deployment' | 'staging_active' | 'deactivating' | 'inactive' | 'backup_issued' | 'holding_deployment';
    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be used.
     */
    readonly type?: 'dv';
    /**
     * The time the custom certificate was uploaded.
     */
    uploaded_on?: string;
    /**
     * Domain validation errors that have been received by the certificate authority (CA).
     */
    validation_errors?: Array<{
        /**
         * A domain validation error.
         */
        message?: string;
    }>;
    validation_records?: Array<validation_record>;
    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
};

