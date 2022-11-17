/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of records needed to enable an Email Routing zone.
 */
export type schemas_dns_record = {
    /**
     * DNS record content.
     */
    content?: string;
    /**
     * DNS record name (or @ for the zone apex).
     */
    name?: string;
    /**
     * Required for MX, SRV and URI records. Unused by other record types. Records with lower priorities are preferred.
     */
    priority?: number;
    /**
     * Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1 for 'automatic'.
     */
    ttl?: (number | 1);
    /**
     * DNS record type.
     */
    readonly type?: 'A' | 'AAAA' | 'CNAME' | 'HTTPS' | 'TXT' | 'SRV' | 'LOC' | 'MX' | 'NS' | 'CERT' | 'DNSKEY' | 'DS' | 'NAPTR' | 'SMIMEA' | 'SSHFP' | 'SVCB' | 'TLSA' | 'URI';
};

