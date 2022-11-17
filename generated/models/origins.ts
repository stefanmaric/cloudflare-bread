/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_origin } from './schemas_origin';

/**
 * The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.
 */
export type origins = Array<schemas_origin>;
