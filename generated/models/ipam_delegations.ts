/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { cidr } from './cidr';
import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { delegated_account_identifier } from './delegated_account_identifier';
import type { delegation_identifier } from './delegation_identifier';
import type { timestamp } from './timestamp';

export type ipam_delegations = {
    cidr?: cidr;
    created_at?: timestamp;
    delegated_account_id?: delegated_account_identifier;
    id?: delegation_identifier;
    modified_at?: timestamp;
    parent_prefix_id?: common_components_schemas_identifier;
};

