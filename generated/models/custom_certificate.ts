/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { bundle_method } from './bundle_method';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { components_schemas_expires_on } from './components_schemas_expires_on';
import type { components_schemas_modified_on } from './components_schemas_modified_on';
import type { custom_certificate_components_schemas_identifier } from './custom_certificate_components_schemas_identifier';
import type { custom_certificate_components_schemas_status } from './custom_certificate_components_schemas_status';
import type { geo_restrictions } from './geo_restrictions';
import type { hosts } from './hosts';
import type { issuer } from './issuer';
import type { keyless_certificate } from './keyless_certificate';
import type { policy } from './policy';
import type { schemas_priority } from './schemas_priority';
import type { signature } from './signature';
import type { uploaded_on } from './uploaded_on';

export type custom_certificate = {
    bundle_method: bundle_method;
    expires_on: components_schemas_expires_on;
    geo_restrictions?: geo_restrictions;
    hosts: hosts;
    id: custom_certificate_components_schemas_identifier;
    issuer: issuer;
    keyless_server?: keyless_certificate;
    modified_on: components_schemas_modified_on;
    policy?: policy;
    priority: schemas_priority;
    signature: signature;
    status: custom_certificate_components_schemas_status;
    uploaded_on: uploaded_on;
    zone_id: common_components_schemas_identifier;
};

