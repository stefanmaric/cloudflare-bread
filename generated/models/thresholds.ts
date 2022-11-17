/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { auth_id_tokens } from './auth_id_tokens';
import type { data_points } from './data_points';
import type { p50 } from './p50';
import type { p90 } from './p90';
import type { p99 } from './p99';
import type { period_seconds } from './period_seconds';
import type { requests } from './requests';
import type { suggested_threshold } from './suggested_threshold';
import type { timestamp } from './timestamp';

export type thresholds = {
    thresholds?: {
        auth_id_tokens?: auth_id_tokens;
        data_points?: data_points;
        last_updated?: timestamp;
        p50?: p50;
        p90?: p90;
        p99?: p99;
        period_seconds?: period_seconds;
        requests?: requests;
        suggested_threshold?: suggested_threshold;
    };
};

