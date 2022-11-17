/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { bandwidth_by_colo } from './bandwidth_by_colo';
import type { requests_by_colo } from './requests_by_colo';
import type { since } from './since';
import type { threats } from './threats';
import type { until } from './until';

/**
 * Time deltas containing metadata about each bucket of time. The number of buckets (resolution) is determined by the amount of time between the since and until parameters.
 */
export type timeseries_by_colo = Array<{
    bandwidth?: bandwidth_by_colo;
    requests?: requests_by_colo;
    since?: since;
    threats?: threats;
    until?: until;
}>;
