/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_target } from './components_schemas_target';
import type { dnslink } from './dnslink';
import type { web3_hostname_components_schemas_description } from './web3_hostname_components_schemas_description';
import type { web3_hostname_components_schemas_name } from './web3_hostname_components_schemas_name';

export type create_request = {
    description?: web3_hostname_components_schemas_description;
    dnslink?: dnslink;
    name: web3_hostname_components_schemas_name;
    target: components_schemas_target;
};

