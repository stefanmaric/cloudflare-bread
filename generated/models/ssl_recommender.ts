/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ssl_recommender_enabled } from './ssl_recommender_enabled';

/**
 * Enrollment in the SSL/TLS Recommender service which tries to detect and recommend (by sending periodic emails) the most secure SSL/TLS setting your origin servers support.
 */
export type ssl_recommender = {
    enabled?: ssl_recommender_enabled;
    /**
     * Enrollment value for SSL/TLS Recommender.
     */
    id?: 'ssl_recommender';
};

