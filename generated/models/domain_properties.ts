/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { can_register } from './can_register';
import type { components_schemas_created_at } from './components_schemas_created_at';
import type { components_schemas_updated_at } from './components_schemas_updated_at';
import type { current_registrar } from './current_registrar';
import type { expires_at } from './expires_at';
import type { locked } from './locked';
import type { registrant_contact } from './registrant_contact';
import type { registry_statuses } from './registry_statuses';
import type { schemas_available } from './schemas_available';
import type { schemas_domain_identifier } from './schemas_domain_identifier';
import type { supported_tld } from './supported_tld';
import type { transfer_in } from './transfer_in';

export type domain_properties = {
    available?: schemas_available;
    can_register?: can_register;
    created_at?: components_schemas_created_at;
    current_registrar?: current_registrar;
    expires_at?: expires_at;
    id?: schemas_domain_identifier;
    locked?: locked;
    registrant_contact?: registrant_contact;
    registry_statuses?: registry_statuses;
    supported_tld?: supported_tld;
    transfer_in?: transfer_in;
    updated_at?: components_schemas_updated_at;
};

