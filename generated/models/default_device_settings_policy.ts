/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allow_mode_switch } from './allow_mode_switch';
import type { allow_updates } from './allow_updates';
import type { allowed_to_leave } from './allowed_to_leave';
import type { auto_connect } from './auto_connect';
import type { captive_portal } from './captive_portal';
import type { components_schemas_exclude } from './components_schemas_exclude';
import type { disable_auto_fallback } from './disable_auto_fallback';
import type { fallback_domains } from './fallback_domains';
import type { gateway_unique_id } from './gateway_unique_id';
import type { schemas_include } from './schemas_include';
import type { service_mode_v2 } from './service_mode_v2';
import type { support_url } from './support_url';
import type { switch_locked } from './switch_locked';

export type default_device_settings_policy = {
    allow_mode_switch?: allow_mode_switch;
    allow_updates?: allow_updates;
    allowed_to_leave?: allowed_to_leave;
    auto_connect?: auto_connect;
    captive_portal?: captive_portal;
    /**
     * Whether the policy will be applied to matching devices.
     */
    default?: boolean;
    disable_auto_fallback?: disable_auto_fallback;
    /**
     * Whether the policy will be applied to matching devices.
     */
    enabled?: boolean;
    exclude?: components_schemas_exclude;
    fallback_domains?: fallback_domains;
    gateway_unique_id?: gateway_unique_id;
    include?: schemas_include;
    service_mode_v2?: service_mode_v2;
    support_url?: support_url;
    switch_locked?: switch_locked;
};

