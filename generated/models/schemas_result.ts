/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { query } from './query';

/**
 * Metrics on Workers KV requests.
 */
export type schemas_result = {
    data: Array<{
        /**
         * List of metrics returned by the query.
         */
        metrics: Array<any>;
    }> | null;
    /**
     * Number of seconds between current time and last processed event, i.e. how many seconds of data could be missing.
     */
    data_lag: number;
    /**
     * Maximum results for each metric.
     */
    max: any;
    /**
     * Minimum results for each metric.
     */
    min: any;
    query: query;
    /**
     * Total number of rows in the result.
     */
    rows: number;
    /**
     * Total results for metrics across all data.
     */
    totals: any;
};

