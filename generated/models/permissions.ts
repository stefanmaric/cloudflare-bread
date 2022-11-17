/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { grants } from './grants';

export type permissions = {
    analytics?: grants;
    billing?: grants;
    cache_purge?: grants;
    dns?: grants;
    dns_records?: grants;
    lb?: grants;
    logs?: grants;
    organization?: grants;
    ssl?: grants;
    waf?: grants;
    zone_settings?: grants;
    zones?: grants;
};

