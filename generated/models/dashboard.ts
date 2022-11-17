/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { timeseries } from './timeseries';
import type { totals } from './totals';

/**
 * Totals and timeseries data.
 */
export type dashboard = {
    timeseries?: timeseries;
    totals?: totals;
};

