/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The time in seconds during which Cloudflare will perform the mitigation action. Must be an integer value greater than or equal to the period.
 * Notes: If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone's Challenge Passage time and you should not provide this value.
 */
export type timeout = number;
