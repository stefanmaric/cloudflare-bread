/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { cidr_list } from './cidr_list';

/**
 * Client IP restrictions.
 */
export type request_ip = {
    in?: cidr_list;
    not_in?: cidr_list;
};

