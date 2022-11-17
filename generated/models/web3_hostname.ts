/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_components_schemas_identifier } from './common_components_schemas_identifier';
import type { components_schemas_target } from './components_schemas_target';
import type { dnslink } from './dnslink';
import type { timestamp } from './timestamp';
import type { web3_hostname_components_schemas_description } from './web3_hostname_components_schemas_description';
import type { web3_hostname_components_schemas_name } from './web3_hostname_components_schemas_name';
import type { web3_hostname_components_schemas_status } from './web3_hostname_components_schemas_status';

export type web3_hostname = {
    created_on?: timestamp;
    description?: web3_hostname_components_schemas_description;
    dnslink?: dnslink;
    id?: common_components_schemas_identifier;
    modified_on?: timestamp;
    name?: web3_hostname_components_schemas_name;
    status?: web3_hostname_components_schemas_status;
    target?: components_schemas_target;
};

