/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { certificates_components_schemas_expires_on } from './certificates_components_schemas_expires_on';
import type { certificates_components_schemas_identifier } from './certificates_components_schemas_identifier';
import type { components_schemas_certificate } from './components_schemas_certificate';
import type { csr } from './csr';
import type { hostnames } from './hostnames';
import type { request_type } from './request_type';
import type { requested_validity } from './requested_validity';

export type certificates = {
    certificate?: components_schemas_certificate;
    csr: csr;
    expires_on?: certificates_components_schemas_expires_on;
    hostnames: hostnames;
    id?: certificates_components_schemas_identifier;
    request_type: request_type;
    requested_validity: requested_validity;
};

