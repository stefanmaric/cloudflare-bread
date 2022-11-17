/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { components_schemas_base } from './components_schemas_base';

/**
 * Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
 */
export type variants = components_schemas_base;

