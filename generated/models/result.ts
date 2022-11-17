/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dimension_value } from './dimension_value';

export type result = {
    data: Array<{
        /**
         * Array of dimension values for this row.
         */
        dimensions: Array<dimension_value>;
        metrics: Array<any>;
    }> | null;
    /**
     * Number of seconds between current time and last processed event, in another words how many seconds of data could be missing.
     */
    data_lag?: number;
    /**
     * Maximum results for each metric.
     */
    max?: any;
    /**
     * Minimum results for each metric.
     */
    min?: any;
    /**
     * Total number of rows in the result.
     */
    rows: number;
    /**
     * Total results for metrics across all data.
     */
    totals: any;
};

