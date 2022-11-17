/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { header_name } from './header_name';
import type { header_op } from './header_op';
import type { header_value } from './header_value';
import type { methods } from './methods';
import type { origin_traffic } from './origin_traffic';
import type { schemas_url } from './schemas_url';
import type { schemes } from './schemes';

/**
 * Determines which traffic the rate limit counts towards the threshold.
 */
export type match = {
    headers?: Array<{
        name?: header_name;
        op?: header_op;
        value?: header_value;
    }>;
    request?: {
        methods?: methods;
        schemes?: schemes;
        url?: schemas_url;
    };
    response?: {
        origin_traffic?: origin_traffic;
    };
};

