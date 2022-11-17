/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { identity_providers_components_schemas_name } from './identity_providers_components_schemas_name';
import type { identity_providers_components_schemas_type } from './identity_providers_components_schemas_type';
import type { schemas_config } from './schemas_config';
import type { uuid } from './uuid';

export type identity_providers = {
    config?: schemas_config;
    id?: uuid;
    name?: identity_providers_components_schemas_name;
    type?: identity_providers_components_schemas_type;
};

