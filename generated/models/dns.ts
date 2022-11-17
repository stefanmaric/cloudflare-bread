/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dns_name } from './dns_name';
import type { dns_type } from './dns_type';

/**
 * The name and type of DNS record for the Spectrum application.
 */
export type dns = {
    name?: dns_name;
    type?: dns_type;
};

