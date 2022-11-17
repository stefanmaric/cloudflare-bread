/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { alert_types_components_schemas_description } from './alert_types_components_schemas_description';
import type { alert_types_components_schemas_type } from './alert_types_components_schemas_type';
import type { display_name } from './display_name';
import type { schemas_filter_options } from './schemas_filter_options';

export type alert_types = {
    description?: alert_types_components_schemas_description;
    display_name?: display_name;
    filter_options?: schemas_filter_options;
    type?: alert_types_components_schemas_type;
};

