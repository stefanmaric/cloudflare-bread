/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Filter options for a particular resource type (pool or origin). Use null to reset.
 */
export type filter_options = {
    /**
     * If set true, disable notifications for this type of resource (pool or origin).
     */
    disable?: boolean;
    /**
     * If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).
     */
    healthy?: boolean | null;
};

