/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { colo } from './colo';
import type { error } from './error';
import type { hop_result } from './hop_result';
import type { target_summary } from './target_summary';
import type { traceroute_time_ms } from './traceroute_time_ms';

export type colo_result = {
    colo?: colo;
    error?: error;
    hops?: Array<hop_result>;
    target_summary?: target_summary;
    traceroute_time_ms?: traceroute_time_ms;
};

