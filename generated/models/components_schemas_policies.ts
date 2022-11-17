/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { alert_type } from './alert_type';
import type { components_schemas_filters } from './components_schemas_filters';
import type { mechanisms } from './mechanisms';
import type { policies_components_schemas_description } from './policies_components_schemas_description';
import type { policies_components_schemas_enabled } from './policies_components_schemas_enabled';
import type { policies_components_schemas_name_2 } from './policies_components_schemas_name_2';
import type { timestamp } from './timestamp';
import type { uuid } from './uuid';

export type components_schemas_policies = {
    alert_type?: alert_type;
    created?: timestamp;
    description?: policies_components_schemas_description;
    enabled?: policies_components_schemas_enabled;
    filters?: components_schemas_filters;
    id?: uuid;
    mechanisms?: mechanisms;
    modified?: timestamp;
    name?: policies_components_schemas_name_2;
};

