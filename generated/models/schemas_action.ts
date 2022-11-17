/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Actions pattern.
 */
export type schemas_action = {
    /**
     * Type of supported action.
     */
    type: 'forward' | 'worker';
    value: Array<string>;
};

