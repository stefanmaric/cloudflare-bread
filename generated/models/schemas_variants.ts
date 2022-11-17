/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { hero_url } from './hero_url';
import type { original_url } from './original_url';
import type { schemas_thumbnail_url } from './schemas_thumbnail_url';

/**
 * Object specifying available variants for an image.
 */
export type schemas_variants = Array<(schemas_thumbnail_url | hero_url | original_url)>;
