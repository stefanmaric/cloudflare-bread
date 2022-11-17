/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The destination port at the origin. Only specified in conjunction with origin_dns. May use an integer to specify a single origin port, for example `1000`, or a string to specify a range of origin ports, for example `"1000-2000"`.
 * Notes: If specifying a port range, the number of ports in the range must match the number of ports specified in the "protocol" field.
 */
export type origin_port = (number | string);

