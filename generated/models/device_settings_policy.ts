/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allow_mode_switch } from './allow_mode_switch';
import type { allow_updates } from './allow_updates';
import type { allowed_to_leave } from './allowed_to_leave';
import type { auto_connect } from './auto_connect';
import type { captive_portal } from './captive_portal';
import type { components_schemas_exclude } from './components_schemas_exclude';
import type { components_schemas_match } from './components_schemas_match';
import type { components_schemas_precedence } from './components_schemas_precedence';
import type { disable_auto_fallback } from './disable_auto_fallback';
import type { fallback_domains } from './fallback_domains';
import type { gateway_unique_id } from './gateway_unique_id';
import type { schemas_default } from './schemas_default';
import type { schemas_include } from './schemas_include';
import type { service_mode_v2 } from './service_mode_v2';
import type { support_url } from './support_url';
import type { switch_locked } from './switch_locked';
import type { uuid } from './uuid';

export type device_settings_policy = {
    allow_mode_switch?: allow_mode_switch;
    allow_updates?: allow_updates;
    allowed_to_leave?: allowed_to_leave;
    auto_connect?: auto_connect;
    captive_portal?: captive_portal;
    default?: schemas_default;
    disable_auto_fallback?: disable_auto_fallback;
    /**
     * Whether the policy will be applied to matching devices.
     */
    enabled?: boolean;
    exclude?: components_schemas_exclude;
    fallback_domains?: fallback_domains;
    gateway_unique_id?: gateway_unique_id;
    include?: schemas_include;
    match?: components_schemas_match;
    /**
     * The name of the device settings policy.
     */
    name?: string;
    policy_id?: uuid;
    precedence?: components_schemas_precedence;
    service_mode_v2?: service_mode_v2;
    support_url?: support_url;
    switch_locked?: switch_locked;
};

