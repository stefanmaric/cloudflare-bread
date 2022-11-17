/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { deprecate_any_requests } from './deprecate_any_requests';
import type { ecs_fallback } from './ecs_fallback';
import type { maximum_cache_ttl } from './maximum_cache_ttl';
import type { minimum_cache_ttl } from './minimum_cache_ttl';
import type { origin_ips } from './origin_ips';
import type { schemas_modified_on } from './schemas_modified_on';
import type { schemas_negative_cache_ttl } from './schemas_negative_cache_ttl';
import type { schemas_ratelimit } from './schemas_ratelimit';
import type { virtual_dns_components_schemas_name } from './virtual_dns_components_schemas_name';
import type { virtual_dns_ips } from './virtual_dns_ips';

export type virtual_dns = {
    deprecate_any_requests: deprecate_any_requests;
    ecs_fallback: ecs_fallback;
    id: common_components_schemas_identifier;
    maximum_cache_ttl: maximum_cache_ttl;
    minimum_cache_ttl: minimum_cache_ttl;
    modified_on: schemas_modified_on;
    name: virtual_dns_components_schemas_name;
    negative_cache_ttl?: schemas_negative_cache_ttl;
    origin_ips: origin_ips;
    ratelimit?: schemas_ratelimit;
    virtual_dns_ips: virtual_dns_ips;
};

