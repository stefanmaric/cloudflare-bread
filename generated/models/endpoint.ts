/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-normalized upon insertion. See: https://developers.cloudflare.com/rules/normalization/how-it-works/.
 */
export type endpoint = string;
