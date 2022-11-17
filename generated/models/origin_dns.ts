/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dns_ttl } from './dns_ttl';
import type { origin_dns_name } from './origin_dns_name';
import type { origin_dns_type } from './origin_dns_type';

/**
 * The name and type of DNS record for the Spectrum application.
 */
export type origin_dns = {
    name?: origin_dns_name;
    ttl?: dns_ttl;
    type?: origin_dns_type;
};

