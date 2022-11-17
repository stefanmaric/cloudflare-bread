/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_cidr_configuration } from './schemas_cidr_configuration';
import type { schemas_ip_configuration } from './schemas_ip_configuration';

/**
 * A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations.
 */
export type configurations = Array<(schemas_ip_configuration | schemas_cidr_configuration)>;
