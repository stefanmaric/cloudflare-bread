/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { timeseries_by_colo } from './timeseries_by_colo';
import type { totals_by_colo } from './totals_by_colo';

/**
 * A breakdown of all dashboard analytics data by co-locations. This is limited to Enterprise zones only.
 */
export type datacenters = Array<{
    /**
     * The airport code identifer for the co-location.
     */
    colo_id?: string;
    timeseries?: timeseries_by_colo;
    totals?: totals_by_colo;
}>;
