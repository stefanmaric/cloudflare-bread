/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { keyless_certificate_components_schemas_identifier } from './keyless_certificate_components_schemas_identifier';
import type { keyless_certificate_components_schemas_name } from './keyless_certificate_components_schemas_name';
import type { keyless_certificate_components_schemas_status } from './keyless_certificate_components_schemas_status';
import type { schemas_enabled } from './schemas_enabled';
import type { schemas_host } from './schemas_host';
import type { schemas_port } from './schemas_port';

export type keyless_certificate_components_schemas_base = {
    /**
     * When the Keyless SSL was created.
     */
    readonly created_on: string;
    enabled: schemas_enabled;
    host: schemas_host;
    id: keyless_certificate_components_schemas_identifier;
    /**
     * When the Keyless SSL was last modified.
     */
    readonly modified_on: string;
    name: keyless_certificate_components_schemas_name;
    /**
     * Available permissions for the Keyless SSL for the current user requesting the item.
     */
    readonly permissions: Array<any>;
    port: schemas_port;
    status: keyless_certificate_components_schemas_status;
};

