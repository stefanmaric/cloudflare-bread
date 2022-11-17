/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { endpoint } from './endpoint';
import type { features } from './features';
import type { host } from './host';
import type { method } from './method';
import type { operation_id } from './operation_id';
import type { timestamp } from './timestamp';

export type operation = {
    endpoint: endpoint;
    features?: features;
    host: host;
    last_updated: timestamp;
    method: method;
    operation_id: operation_id;
};

