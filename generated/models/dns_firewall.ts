/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { attack_mitigation } from './attack_mitigation';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { deprecate_any_requests } from './deprecate_any_requests';
import type { dns_firewall_components_schemas_name } from './dns_firewall_components_schemas_name';
import type { dns_firewall_ips } from './dns_firewall_ips';
import type { ecs_fallback } from './ecs_fallback';
import type { maximum_cache_ttl } from './maximum_cache_ttl';
import type { minimum_cache_ttl } from './minimum_cache_ttl';
import type { negative_cache_ttl } from './negative_cache_ttl';
import type { origin_ips } from './origin_ips';
import type { ratelimit } from './ratelimit';
import type { schemas_modified_on } from './schemas_modified_on';

export type dns_firewall = {
    attack_mitigation?: attack_mitigation;
    deprecate_any_requests: deprecate_any_requests;
    dns_firewall_ips: dns_firewall_ips;
    ecs_fallback: ecs_fallback;
    id: common_components_schemas_identifier;
    maximum_cache_ttl: maximum_cache_ttl;
    minimum_cache_ttl: minimum_cache_ttl;
    modified_on: schemas_modified_on;
    name: dns_firewall_components_schemas_name;
    negative_cache_ttl?: negative_cache_ttl;
    origin_ips: origin_ips;
    ratelimit?: ratelimit;
};

