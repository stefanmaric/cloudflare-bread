/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Action for the catch-all routing rule.
 */
export type catchall_action = {
    /**
     * Type of action for catch-all rule.
     */
    type: 'drop' | 'forward' | 'worker';
    value?: Array<string>;
};

