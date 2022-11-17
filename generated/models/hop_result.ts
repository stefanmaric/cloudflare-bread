/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { node_result } from './node_result';
import type { packets_lost } from './packets_lost';
import type { packets_sent } from './packets_sent';
import type { packets_ttl } from './packets_ttl';

export type hop_result = {
    /**
     * An array of node objects.
     */
    nodes?: Array<node_result>;
    packets_lost?: packets_lost;
    packets_sent?: packets_sent;
    packets_ttl?: packets_ttl;
};

