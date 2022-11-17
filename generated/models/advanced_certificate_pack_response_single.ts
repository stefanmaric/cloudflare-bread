/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { advanced_type } from './advanced_type';
import type { api_response_single } from './api_response_single';
import type { certificate_authority } from './certificate_authority';
import type { certificate_packs_components_schemas_identifier } from './certificate_packs_components_schemas_identifier';
import type { certificate_packs_components_schemas_status } from './certificate_packs_components_schemas_status';
import type { cloudflare_branding } from './cloudflare_branding';
import type { schemas_hosts } from './schemas_hosts';
import type { validation_method } from './validation_method';
import type { validity_days } from './validity_days';

export type advanced_certificate_pack_response_single = (api_response_single & {
    result?: {
        certificate_authority?: certificate_authority;
        cloudflare_branding?: cloudflare_branding;
        hosts?: schemas_hosts;
        id?: certificate_packs_components_schemas_identifier;
        status?: certificate_packs_components_schemas_status;
        type?: advanced_type;
        validation_method?: validation_method;
        validity_days?: validity_days;
    };
});

