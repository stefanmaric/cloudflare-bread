/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Which account types are allowed to create policies based on this categories. `blocked` categories are blocked unconditionally for all accounts. `removalPending` categories can be removed from policies but not added. `noBlock` categories cannot be blocked.
 */
export type _class = 'free' | 'premium' | 'blocked' | 'removalPending' | 'noBlock';
