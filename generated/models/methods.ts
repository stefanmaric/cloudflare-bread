/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The HTTP methods to match. You can specify a subset (for example, `['POST','PUT']`) or all methods (`['_ALL_']`). This field is optional when creating a rate limit.
 */
export type methods = Array<'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | '_ALL_'>;
