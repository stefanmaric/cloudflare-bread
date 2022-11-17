/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { brand_check } from './brand_check';
import type { cert_pack_uuid } from './cert_pack_uuid';
import type { certificate_status } from './certificate_status';
import type { schemas_signature } from './schemas_signature';
import type { schemas_validation_method } from './schemas_validation_method';
import type { verification_info } from './verification_info';
import type { verification_status } from './verification_status';
import type { verification_type } from './verification_type';

export type verification = {
    brand_check?: brand_check;
    cert_pack_uuid?: cert_pack_uuid;
    certificate_status: certificate_status;
    signature?: schemas_signature;
    validation_method?: schemas_validation_method;
    verification_info?: verification_info;
    verification_status?: verification_status;
    verification_type?: verification_type;
};

