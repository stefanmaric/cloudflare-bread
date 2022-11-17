/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { bandwidth } from './bandwidth';
import type { pageviews } from './pageviews';
import type { schemas_requests } from './schemas_requests';
import type { since } from './since';
import type { threats } from './threats';
import type { uniques } from './uniques';
import type { until } from './until';

/**
 * Breakdown of totals by data type.
 */
export type totals = {
    bandwidth?: bandwidth;
    pageviews?: pageviews;
    requests?: schemas_requests;
    since?: since;
    threats?: threats;
    uniques?: uniques;
    until?: until;
};

