/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_base } from './schemas_base';

/**
 * Enables or disables buffering of responses from the proxied server. Cloudflare may buffer the whole payload to deliver it at once to the client versus allowing it to be delivered in chunks. By default, the proxied server streams directly and is not buffered by Cloudflare. This is limited to Enterprise Zones.
 */
export type response_buffering = schemas_base;

