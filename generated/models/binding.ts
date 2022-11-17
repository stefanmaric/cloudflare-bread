/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { kv_namespace_binding } from './kv_namespace_binding';
import type { wasm_module_binding } from './wasm_module_binding';

export type binding = (kv_namespace_binding | wasm_module_binding);

