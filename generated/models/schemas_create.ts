/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { components_schemas_type } from './components_schemas_type';
import type { properties_name } from './properties_name';

export type schemas_create = {
    /**
     * Account in which the zone was created.
     */
    account: {
        id?: common_components_schemas_identifier;
    };
    name: properties_name;
    type?: components_schemas_type;
};

