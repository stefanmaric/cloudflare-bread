/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { since } from './since';
import type { until } from './until';

/**
 * The exact parameters/timestamps the analytics service used to return data.
 */
export type query_response = {
    since?: since;
    /**
     * The amount of time (in minutes) that each data point in the timeseries represents. The granularity of the time-series returned (e.g. each bucket in the time series representing 1-minute vs 1-day) is calculated by the API based on the time-range provided to the API.
     */
    time_delta?: number;
    until?: until;
};

