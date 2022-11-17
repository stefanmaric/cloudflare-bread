/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { batch_size } from './batch_size';
import type { dlq_name } from './dlq_name';
import type { max_retries } from './max_retries';
import type { max_wait_time_ms } from './max_wait_time_ms';

export type consumer_created = {
    readonly created_on?: any;
    dead_letter_queue?: dlq_name;
    readonly environment?: any;
    readonly queue_name?: any;
    readonly script_name?: any;
    settings?: {
        batch_size?: batch_size;
        max_retries?: max_retries;
        max_wait_time_ms?: max_wait_time_ms;
    };
};

