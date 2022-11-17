/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Criteria specifying when the current rate limit should be bypassed. You can specify that the rate limit should not apply to one or more URLs.
 */
export type bypass = Array<{
    name?: 'url';
    /**
     * The URL to bypass.
     */
    value?: string;
}>;
