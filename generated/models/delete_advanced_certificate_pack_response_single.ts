/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { certificate_packs_components_schemas_identifier } from './certificate_packs_components_schemas_identifier';

export type delete_advanced_certificate_pack_response_single = (api_response_single & {
    result?: {
        id?: certificate_packs_components_schemas_identifier;
    };
});

