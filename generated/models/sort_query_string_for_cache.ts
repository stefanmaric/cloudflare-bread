/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_base } from './schemas_base';

/**
 * Cloudflare will treat files with the same query strings as the same file in cache, regardless of the order of the query strings. This is limited to Enterprise Zones.
 */
export type sort_query_string_for_cache = schemas_base;

