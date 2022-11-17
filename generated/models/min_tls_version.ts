/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_base } from './schemas_base';

/**
 * Only accepts HTTPS requests that use at least the TLS protocol version specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
 */
export type min_tls_version = schemas_base;

