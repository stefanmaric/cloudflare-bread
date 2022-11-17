/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_aud } from './schemas_aud';
import type { timestamp } from './timestamp';
import type { uuid } from './uuid';

export type basic_app_response_props = {
    aud?: schemas_aud;
    created_at?: timestamp;
    id?: uuid;
    updated_at?: timestamp;
};

