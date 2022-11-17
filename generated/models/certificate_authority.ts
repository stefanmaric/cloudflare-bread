/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Certificate Authority selected for the order.  Selecting Let's Encrypt will reduce customization of other fields: validation_method must be 'txt', validity_days must be 90, cloudflare_branding must be omitted, and hosts must contain only 2 entries, one for the zone name and one for the subdomain wildcard of the zone name (e.g. example.com, *.example.com).
 */
export type certificate_authority = 'digicert' | 'google' | 'lets_encrypt';
