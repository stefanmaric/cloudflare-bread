/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { filter_options } from './filter_options';

/**
 * Filter pool and origin health notifications by resource type or health status. Use null to reset.
 */
export type notification_filter = {
    origin?: filter_options;
    pool?: filter_options;
};

