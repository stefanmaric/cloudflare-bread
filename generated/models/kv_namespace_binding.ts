/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { binding_name } from './binding_name';
import type { namespace_identifier } from './namespace_identifier';

export type kv_namespace_binding = {
    name: binding_name;
    namespace_id: namespace_identifier;
    /**
     * The class of resource that the binding provides.
     */
    type: 'kv_namespace';
};

