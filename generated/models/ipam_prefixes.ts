/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { advertised } from './advertised';
import type { approved } from './approved';
import type { asn } from './asn';
import type { cidr } from './cidr';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { ipam_prefixes_components_schemas_description } from './ipam_prefixes_components_schemas_description';
import type { loa_document_identifier } from './loa_document_identifier';
import type { modified_at_nullable } from './modified_at_nullable';
import type { on_demand_enabled } from './on_demand_enabled';
import type { on_demand_locked } from './on_demand_locked';
import type { timestamp } from './timestamp';

export type ipam_prefixes = {
    account_id?: common_components_schemas_identifier;
    advertised?: advertised;
    advertised_modified_at?: modified_at_nullable;
    approved?: approved;
    asn?: asn;
    cidr?: cidr;
    created_at?: timestamp;
    description?: ipam_prefixes_components_schemas_description;
    id?: common_components_schemas_identifier;
    loa_document_id?: loa_document_identifier;
    modified_at?: timestamp;
    on_demand_enabled?: on_demand_enabled;
    on_demand_locked?: on_demand_locked;
};

