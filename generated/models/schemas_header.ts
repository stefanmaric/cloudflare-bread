/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Host } from './Host';

/**
 * The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'.
 */
export type schemas_header = {
    Host?: Host;
};

