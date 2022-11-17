/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allowed_idps } from './allowed_idps';
import type { app_launcher_visible } from './app_launcher_visible';
import type { apps_components_schemas_name } from './apps_components_schemas_name';
import type { auto_redirect_to_identity } from './auto_redirect_to_identity';
import type { logo_url } from './logo_url';
import type { saas_app } from './saas_app';

export type saas_props = {
    allowed_idps?: allowed_idps;
    app_launcher_visible?: app_launcher_visible;
    auto_redirect_to_identity?: auto_redirect_to_identity;
    logo_url?: logo_url;
    name?: apps_components_schemas_name;
    saas_app?: saas_app;
    /**
     * The application type.
     */
    type?: string;
};

