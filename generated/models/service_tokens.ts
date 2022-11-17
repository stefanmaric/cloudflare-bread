/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { client_id } from './client_id';
import type { service_tokens_components_schemas_name } from './service_tokens_components_schemas_name';
import type { timestamp } from './timestamp';

export type service_tokens = {
    client_id?: client_id;
    created_at?: timestamp;
    /**
     * The ID of the service token.
     */
    id?: any;
    name?: service_tokens_components_schemas_name;
    updated_at?: timestamp;
};

