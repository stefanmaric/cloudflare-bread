/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { colo_names } from './colo_names';
import type { colo_regions } from './colo_regions';

/**
 * Used only for ECMP routes.
 */
export type schemas_scope = {
    colo_names?: colo_names;
    colo_regions?: colo_regions;
};

