/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { string_constraint } from './string_constraint';
import type { url_target } from './url_target';

/**
 * A request condition target.
 */
export type target = (url_target | {
    /**
     * The constraint of a target.
     */
    constraint: string_constraint;
    /**
     * A target based on the URL of the request.
     */
    target: 'url';
});

