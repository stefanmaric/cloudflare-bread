/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object that allows you to enable or disable WAF rule groups for the current WAF override. Each key of this object must be the ID of a WAF rule group, and each value must be a valid WAF action (usually `default` or `disable`). When creating a new URI-based WAF override, you must provide a `groups` object or a `rules` object.
 */
export type groups = Record<string, any>;
