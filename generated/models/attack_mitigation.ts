/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Attack mitigation settings.
 */
export type attack_mitigation = {
    /**
     * When enabled, random-prefix attacks are automatically mitigated and the origin DNS servers protected.
     */
    enabled?: boolean;
    /**
     * Only mitigate attacks when origin servers seem unhealthy.
     */
    only_when_origin_unhealthy?: boolean;
};

