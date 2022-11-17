/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { allowed_idps } from './allowed_idps';
import type { apps_components_schemas_name } from './apps_components_schemas_name';
import type { apps_components_schemas_type } from './apps_components_schemas_type';
import type { auto_redirect_to_identity } from './auto_redirect_to_identity';
import type { schemas_domain } from './schemas_domain';
import type { session_duration } from './session_duration';

export type feature_app_props = {
    allowed_idps?: allowed_idps;
    auto_redirect_to_identity?: auto_redirect_to_identity;
    domain?: schemas_domain;
    name?: apps_components_schemas_name;
    session_duration?: session_duration;
    type?: apps_components_schemas_type;
};

