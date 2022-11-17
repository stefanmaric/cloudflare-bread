/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { max_retries } from './max_retries';
import type { max_wait_time_ms } from './max_wait_time_ms';

export type consumer_updated = {
    readonly created_on?: any;
    dead_letter_queue?: any;
    readonly environment?: any;
    readonly queue_name?: any;
    readonly script_name?: any;
    settings?: {
        batch_size?: number;
        max_retries?: max_retries;
        max_wait_time_ms?: max_wait_time_ms;
    };
};

