/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { batch_size } from './batch_size';
import type { max_retries } from './max_retries';
import type { max_wait_time_ms } from './max_wait_time_ms';

export type consumer = {
    readonly created_on?: any;
    readonly environment?: any;
    readonly queue_name?: any;
    readonly service?: any;
    settings?: {
        batch_size?: batch_size;
        max_retries?: max_retries;
        max_wait_time_ms?: max_wait_time_ms;
    };
};

