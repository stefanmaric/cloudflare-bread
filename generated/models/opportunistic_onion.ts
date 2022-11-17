/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_base } from './schemas_base';

/**
 * Add an Alt-Svc header to all legitimate requests from Tor, allowing the connection to use our onion services instead of exit nodes.
 */
export type opportunistic_onion = schemas_base;

