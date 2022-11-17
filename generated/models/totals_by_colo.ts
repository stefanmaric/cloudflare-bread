/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { bandwidth_by_colo } from './bandwidth_by_colo';
import type { requests_by_colo } from './requests_by_colo';
import type { since } from './since';
import type { threats } from './threats';
import type { until } from './until';

/**
 * Breakdown of totals by data type.
 */
export type totals_by_colo = {
    bandwidth?: bandwidth_by_colo;
    requests?: requests_by_colo;
    since?: since;
    threats?: threats;
    until?: until;
};

