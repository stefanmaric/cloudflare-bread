/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';

export type dns_response_import_scan = (api_response_single & {
    result?: {
        /**
         * Number of DNS records added.
         */
        recs_added?: number;
        /**
         * Total number of DNS records parsed.
         */
        total_records_parsed?: number;
    };
    timing?: {
        /**
         * When the file parsing ended.
         */
        end_time?: string;
        /**
         * Processing time of the file in seconds.
         */
        process_time?: number;
        /**
         * When the file parsing started.
         */
        start_time?: string;
    };
});

