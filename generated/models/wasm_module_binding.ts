/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { binding_name } from './binding_name';

export type wasm_module_binding = {
    name: binding_name;
    /**
     * The class of resource that the binding provides.
     */
    type: 'wasm_module';
};

