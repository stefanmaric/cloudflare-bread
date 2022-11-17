/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The action that the current WAF rule will perform when triggered. Applies to traditional (deny) WAF rules.
 */
export type mode_deny_traditional = 'default' | 'disable' | 'simulate' | 'block' | 'challenge';
