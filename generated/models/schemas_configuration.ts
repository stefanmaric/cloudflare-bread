/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { asn_configuration } from './asn_configuration';
import type { cidr_configuration } from './cidr_configuration';
import type { country_configuration } from './country_configuration';
import type { ip_configuration } from './ip_configuration';
import type { ipv6_configuration } from './ipv6_configuration';

/**
 * The rule configuration.
 */
export type schemas_configuration = (ip_configuration | ipv6_configuration | cidr_configuration | asn_configuration | country_configuration);

