/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { associated_hostnames } from './associated_hostnames';
import type { certificates_components_schemas_name } from './certificates_components_schemas_name';
import type { fingerprint } from './fingerprint';
import type { timestamp } from './timestamp';

export type schemas_certificates = {
    associated_hostnames?: associated_hostnames;
    created_at?: timestamp;
    expires_on?: timestamp;
    fingerprint?: fingerprint;
    /**
     * The ID of the application that will use this certificate.
     */
    id?: any;
    name?: certificates_components_schemas_name;
    updated_at?: timestamp;
};

