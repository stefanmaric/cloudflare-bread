/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allowed_idps } from './allowed_idps';
import type { app_launcher_visible } from './app_launcher_visible';
import type { apps_components_schemas_name } from './apps_components_schemas_name';
import type { auto_redirect_to_identity } from './auto_redirect_to_identity';
import type { cors_headers } from './cors_headers';
import type { custom_deny_message } from './custom_deny_message';
import type { custom_deny_url } from './custom_deny_url';
import type { enable_binding_cookie } from './enable_binding_cookie';
import type { http_only_cookie_attribute } from './http_only_cookie_attribute';
import type { logo_url } from './logo_url';
import type { same_site_cookie_attribute } from './same_site_cookie_attribute';
import type { schemas_domain } from './schemas_domain';
import type { service_auth_401_redirect } from './service_auth_401_redirect';
import type { session_duration } from './session_duration';
import type { skip_interstitial } from './skip_interstitial';

export type self_hosted_props = {
    allowed_idps?: allowed_idps;
    app_launcher_visible?: app_launcher_visible;
    auto_redirect_to_identity?: auto_redirect_to_identity;
    cors_headers?: cors_headers;
    custom_deny_message?: custom_deny_message;
    custom_deny_url?: custom_deny_url;
    domain?: schemas_domain;
    enable_binding_cookie?: enable_binding_cookie;
    http_only_cookie_attribute?: http_only_cookie_attribute;
    logo_url?: logo_url;
    name?: apps_components_schemas_name;
    same_site_cookie_attribute?: same_site_cookie_attribute;
    service_auth_401_redirect?: service_auth_401_redirect;
    session_duration?: session_duration;
    skip_interstitial?: skip_interstitial;
    /**
     * The application type.
     */
    type?: string;
};

