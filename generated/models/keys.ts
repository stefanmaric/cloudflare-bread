/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { jwk } from './jwk';
import type { keys_components_schemas_created } from './keys_components_schemas_created';
import type { keys_components_schemas_identifier } from './keys_components_schemas_identifier';
import type { pem } from './pem';

export type keys = {
    created?: keys_components_schemas_created;
    id?: keys_components_schemas_identifier;
    jwk?: jwk;
    pem?: pem;
};

